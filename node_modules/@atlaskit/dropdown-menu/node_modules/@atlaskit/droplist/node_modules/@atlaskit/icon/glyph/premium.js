"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../cjs/components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PremiumIcon = function PremiumIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path d=\"M8.572 9.351c.15.148.404.102.489-.09l2.113-4.73c.317-.706 1.333-.708 1.653-.003l2.143 4.736c.087.19.34.236.488.089l4.998-4.951c.61-.603 1.647-.1 1.536.744l-1.957 11.337a.6.6 0 0 1-.598.517H4.6a.599.599 0 0 1-.596-.517L2.008 5.14c-.11-.845.925-1.349 1.535-.747L8.572 9.35zM4.546 18H19.49a.5.5 0 0 1 .478.353l.615 2a.5.5 0 0 1-.478.647H3.935a.5.5 0 0 1-.478-.646l.61-2a.5.5 0 0 1 .48-.354z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>"
  }, props));
};

PremiumIcon.displayName = 'PremiumIcon';
var _default = PremiumIcon;
exports.default = _default;