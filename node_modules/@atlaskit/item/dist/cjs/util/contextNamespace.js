"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clickManagerContext = exports.selectionManagerContext = exports.selectionCacheContext = exports.focusManagerContext = void 0;

var prefix = function prefix(key) {
  return "@atlaskit-private-do-not-use/dropdown-menu:".concat(key);
};

var focusManagerContext = prefix('focus-manager');
exports.focusManagerContext = focusManagerContext;
var selectionCacheContext = prefix('selection-cache');
exports.selectionCacheContext = selectionCacheContext;
var selectionManagerContext = prefix('selection-manager');
exports.selectionManagerContext = selectionManagerContext;
var clickManagerContext = prefix('click-manager');
exports.clickManagerContext = clickManagerContext;