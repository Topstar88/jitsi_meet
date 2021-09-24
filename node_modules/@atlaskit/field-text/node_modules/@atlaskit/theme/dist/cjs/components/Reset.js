"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reset = Reset;
exports.ResetTheme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var colors = _interopRequireWildcard(require("../colors"));

var _createTheme = require("../utils/createTheme");

var orTextColor = function orTextColor(preferred) {
  return function (p) {
    return p[preferred] || p.textColor;
  };
};

var Div = _styledComponents.default.div.withConfig({
  displayName: "Reset__Div",
  componentId: "sc-15i6ali-0"
})(["\n  ", ";\n"], function (p) {
  return (0, _styledComponents.css)(["\n    background-color: ", ";\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n    a:hover {\n      color: ", ";\n    }\n    a:active {\n      color: ", ";\n    }\n    a:focus {\n      outline-color: ", ";\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5 {\n      color: ", ";\n    }\n    h6 {\n      color: ", ";\n    }\n    small {\n      color: ", ";\n    }\n  "], p.backgroundColor, p.textColor, orTextColor('linkColor'), orTextColor('linkColorHover'), orTextColor('linkColorActive'), orTextColor('linkColorOutline'), orTextColor('headingColor'), orTextColor('subtleHeadingColor'), orTextColor('subtleTextColor'));
});

var ResetTheme = (0, _createTheme.createTheme)(function () {
  return {
    backgroundColor: colors.N0,
    linkColor: colors.B400,
    linkColorHover: colors.B300,
    linkColorActive: colors.B500,
    linkColorOutline: colors.B100,
    headingColor: colors.N800,
    subtleHeadingColor: colors.N200,
    subtleTextColor: colors.N200,
    textColor: colors.N900
  };
});
exports.ResetTheme = ResetTheme;

function Reset(props) {
  return _react.default.createElement(ResetTheme.Provider, {
    value: props.theme
  }, _react.default.createElement(ResetTheme.Consumer, null, function (tokens) {
    return _react.default.createElement(Div, (0, _extends2.default)({}, (0, _objectSpread2.default)({}, tokens, {
      mode: undefined
    }), props), props.children);
  }));
}