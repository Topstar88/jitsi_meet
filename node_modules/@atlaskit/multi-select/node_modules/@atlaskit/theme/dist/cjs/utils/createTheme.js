"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = createTheme;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

function createTheme(defaultThemeFn) {
  var emptyThemeFn = function emptyThemeFn(tokens, props) {
    return tokens(props);
  };

  var ThemeContext = (0, _react.createContext)(defaultThemeFn);

  function Consumer(props) {
    var children = props.children,
        themeProps = (0, _objectWithoutProperties2.default)(props, ["children"]);
    return _react.default.createElement(ThemeContext.Consumer, null, function (theme) {
      var themeFn = theme || emptyThemeFn;
      return props.children(themeFn(themeProps));
    });
  }

  function Provider(props) {
    return _react.default.createElement(ThemeContext.Consumer, null, function (themeFn) {
      var valueFn = props.value || emptyThemeFn;

      var mixedFn = function mixedFn(themeProps) {
        return valueFn(themeFn, themeProps);
      };

      return _react.default.createElement(ThemeContext.Provider, {
        value: mixedFn
      }, props.children);
    });
  }

  return {
    Consumer: Consumer,
    Provider: Provider
  };
}