"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _radio = _interopRequireDefault(require("@atlaskit/icon/glyph/radio"));

var _item = _interopRequireWildcard(require("@atlaskit/item"));

var _withToggleInteraction = _interopRequireDefault(require("../hoc/withToggleInteraction"));

var _supportsVoiceover = _interopRequireDefault(require("../../util/supportsVoiceover"));

var _default = (0, _withToggleInteraction.default)((0, _item.withItemFocus)(_item.default), _radio.default, function () {
  return (0, _supportsVoiceover.default)() ? 'radio' : 'menuitemradio';
});

exports.default = _default;