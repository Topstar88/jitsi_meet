"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var canUseDOM = function canUseDOM() {
  return Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
};

var supportsVoiceOver = function supportsVoiceOver() {
  return /Mac OS X/.test(canUseDOM() ? navigator.userAgent : '');
};

var _default = supportsVoiceOver;
exports.default = _default;