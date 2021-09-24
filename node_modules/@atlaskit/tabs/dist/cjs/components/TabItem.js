"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../styled");

var noop = function noop() {};

var TabItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TabItem, _Component);

  function TabItem() {
    (0, _classCallCheck2.default)(this, TabItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabItem).apply(this, arguments));
  }

  (0, _createClass2.default)(TabItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          elementProps = _this$props.elementProps,
          innerRef = _this$props.innerRef,
          isSelected = _this$props.isSelected;
      return _react.default.createElement(_styled.NavItem, (0, _extends2.default)({}, elementProps, {
        innerRef: innerRef,
        status: isSelected ? 'selected' : 'normal'
      }), data.label, isSelected ? _react.default.createElement(_styled.NavLine, {
        status: "selected"
      }) : null);
    }
  }]);
  return TabItem;
}(_react.Component);

exports.default = TabItem;
(0, _defineProperty2.default)(TabItem, "defaultProps", {
  data: {},
  elementProps: {},
  innerRef: noop,
  isSelected: false
});