"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = themed;

var _getTheme = _interopRequireDefault(require("./getTheme"));

/* eslint-disable prefer-rest-params */
function themedVariants(variantProp, variants) {
  return function (props) {
    var theme = (0, _getTheme.default)(props);

    if (props && props[variantProp] && variants) {
      var modes = variants[props[variantProp]];

      if (modes) {
        return modes[theme.mode];
      }
    }

    return '';
  };
}

function themed(modesOrVariant, variantModes) {
  if (typeof modesOrVariant === 'string') {
    return themedVariants(modesOrVariant, variantModes);
  }

  var modes = modesOrVariant;
  return function (props) {
    var theme = (0, _getTheme.default)(props);
    return modes[theme.mode];
  };
}