"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = withTheme;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Theme = _interopRequireDefault(require("./components/Theme"));

// Pre-executes the theme and passes it as a prop to the supplied component.
// This is useful for ensuring that the current theme is accessible as props
// in styled-components.
function withTheme(InnerComponent) {
  return function ComponentWithTheme(props) {
    return _react.default.createElement(_Theme.default.Consumer, null, function (tokens) {
      return _react.default.createElement(InnerComponent, (0, _extends2.default)({}, props, {
        theme: tokens
      }));
    });
  };
}