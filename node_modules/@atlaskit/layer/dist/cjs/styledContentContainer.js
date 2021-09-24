"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _default = _styledComponents.default.div.withConfig({
  displayName: "styledContentContainer",
  componentId: "p0j3f7-0"
})(["\n  [data-role='droplistContent'] {\n    ", ";\n  }\n"], function (_ref) {
  var maxHeight = _ref.maxHeight;
  return maxHeight ? "max-height: ".concat(maxHeight, "px") : '';
});

exports.default = _default;