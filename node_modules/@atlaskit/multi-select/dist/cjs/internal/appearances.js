"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapAppearanceToFieldBase = exports.appearances = void 0;
// =============================================================
// NOTE: Duplicated in ../index and ../StatelessMultiSelect until
// docgen can follow imports.
// -------------------------------------------------------------
// DO NOT update values here without updating the other.
// =============================================================
var appearances = {
  values: ['default', 'subtle'],
  default: 'default'
};
exports.appearances = appearances;
var appearancesMap = {
  default: 'standard',
  subtle: 'subtle'
};

var mapAppearanceToFieldBase = function mapAppearanceToFieldBase(appearance) {
  return appearancesMap[appearance];
};

exports.mapAppearanceToFieldBase = mapAppearanceToFieldBase;