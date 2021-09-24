"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var renderOptions = function renderOptions(items) {
  if (!items || !items.length) return [];
  return items.map(function (item, itemIndex) {
    return _react.default.createElement("option", {
      disabled: item.isDisabled,
      key: itemIndex // eslint-disable-line react/no-array-index-key
      ,
      value: item.value
    }, item.content);
  });
};

var renderOptGroups = function renderOptGroups(groups) {
  return groups.map(function (group, groupIndex) {
    return _react.default.createElement("optgroup", {
      key: groupIndex // eslint-disable-line react/no-array-index-key
      ,
      label: group.heading
    }, renderOptions(group.items));
  });
};

var _default = renderOptGroups;
exports.default = _default;