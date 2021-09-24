"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// from https://facebook.github.io/react/docs/higher-order-components.html
var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

var _default = getDisplayName;
exports.default = _default;