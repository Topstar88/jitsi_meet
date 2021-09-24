"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var ItemShape =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ItemShape, _PureComponent);

  function ItemShape() {
    (0, _classCallCheck2.default)(this, ItemShape);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ItemShape).apply(this, arguments));
  }

  (0, _createClass2.default)(ItemShape, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ItemShape;
}(_react.PureComponent);

exports.default = ItemShape;
(0, _defineProperty2.default)(ItemShape, "defaultProps", {
  isDisabled: false,
  isSelected: false
});