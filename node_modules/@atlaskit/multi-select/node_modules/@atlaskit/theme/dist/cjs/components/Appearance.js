"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _default = function _default(_ref) {
  var children = _ref.children,
      props = _ref.props,
      theme = _ref.theme;
  var appearance = (0, _typeof2.default)(props) === 'object' ? 'default' : props;
  var merged = (0, _typeof2.default)(props) === 'object' ? (0, _objectSpread2.default)({}, props) : {};
  Object.keys(theme).forEach(function (key) {
    if (!(key in merged)) {
      merged[key] = theme[key]({
        appearance: appearance
      });
    }
  });
  return children(merged);
};

exports.default = _default;