"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkbox = _interopRequireDefault(require("@atlaskit/icon/glyph/checkbox"));

var _item = _interopRequireWildcard(require("@atlaskit/item"));

var _withToggleInteraction = _interopRequireDefault(require("../hoc/withToggleInteraction"));

var _supportsVoiceover = _interopRequireDefault(require("../../util/supportsVoiceover"));

var _default = (0, _withToggleInteraction.default)((0, _item.withItemFocus)(_item.default), _checkbox.default, function () {
  return (0, _supportsVoiceover.default)() ? 'checkbox' : 'menuitemcheckbox';
});

exports.default = _default;