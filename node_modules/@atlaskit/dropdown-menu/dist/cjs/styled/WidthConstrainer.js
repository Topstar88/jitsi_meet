"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default = _styledComponents.default.div.withConfig({
  displayName: "WidthConstrainer",
  componentId: "sc-15doeus-0"
})(["\n  ", ";\n"], function (_ref) {
  var shouldFitContainer = _ref.shouldFitContainer;
  return shouldFitContainer ? '' : 'max-width: 300px;';
});

exports.default = _default;