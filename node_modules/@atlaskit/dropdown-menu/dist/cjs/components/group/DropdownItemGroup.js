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

var _react = _interopRequireWildcard(require("react"));

var _item = require("@atlaskit/item");

var DropdownItemGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DropdownItemGroup, _Component);

  function DropdownItemGroup() {
    (0, _classCallCheck2.default)(this, DropdownItemGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DropdownItemGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(DropdownItemGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          elemAfter = _this$props.elemAfter,
          title = _this$props.title;
      return _react.default.createElement(_item.ItemGroup, {
        elemAfter: elemAfter,
        title: title,
        role: "menu"
      }, children);
    }
  }]);
  return DropdownItemGroup;
}(_react.Component);

exports.default = DropdownItemGroup;