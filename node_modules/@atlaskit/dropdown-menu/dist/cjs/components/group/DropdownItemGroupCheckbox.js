"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DropdownItemGroup = _interopRequireDefault(require("./DropdownItemGroup"));

var _withItemSelectionManager = _interopRequireDefault(require("../hoc/withItemSelectionManager"));

var _default = (0, _withItemSelectionManager.default)(_DropdownItemGroup.default, 'checkbox');

exports.default = _default;