"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../styled");

var TabContent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TabContent, _Component);

  function TabContent() {
    (0, _classCallCheck2.default)(this, TabContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabContent).apply(this, arguments));
  }

  (0, _createClass2.default)(TabContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          elementProps = _this$props.elementProps;
      return _react.default.createElement(_styled.TabPane, elementProps, data.content);
    }
  }]);
  return TabContent;
}(_react.Component);

exports.default = TabContent;
(0, _defineProperty2.default)(TabContent, "defaultProps", {
  data: {},
  elementProps: {}
});