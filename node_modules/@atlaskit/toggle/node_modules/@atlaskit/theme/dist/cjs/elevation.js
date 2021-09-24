"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.e500 = exports.e400 = exports.e300 = exports.e200 = exports.e100 = void 0;

var colors = _interopRequireWildcard(require("./colors"));

var _themed = _interopRequireDefault(require("./utils/themed"));

// Cards on a board
var e100 = (0, _themed.default)({
  light: "box-shadow: 0 1px 1px ".concat(colors.N50A, ", 0 0 1px 0 ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 1px 1px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Inline dialogs

exports.e100 = e100;
var e200 = (0, _themed.default)({
  light: "box-shadow: 0 4px 8px -2px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 4px 8px -2px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Modals

exports.e200 = e200;
var e300 = (0, _themed.default)({
  light: "box-shadow: 0 8px 16px -4px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 8px 16px -4px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Panels

exports.e300 = e300;
var e400 = (0, _themed.default)({
  light: "box-shadow: 0 12px 24px -6px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 12px 24px -6px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Flag messages (notifications)

exports.e400 = e400;
var e500 = (0, _themed.default)({
  light: "box-shadow: 0 20px 32px -8px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 20px 32px -8px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
});
exports.e500 = e500;