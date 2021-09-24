"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScrollBlock;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactScrolllock = _interopRequireDefault(require("react-scrolllock"));

var Blanket = _styledComponents.default.div.withConfig({
  displayName: "ScrollBlock__Blanket",
  componentId: "sc-1xiww8k-0"
})(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n"]);

function ScrollBlock() {
  return _react.default.createElement(Blanket, null, _react.default.createElement(_reactScrolllock.default, null));
}