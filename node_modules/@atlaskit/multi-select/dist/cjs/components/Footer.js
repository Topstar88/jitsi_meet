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

var _droplist = require("@atlaskit/droplist");

var _Footer = _interopRequireDefault(require("../styled/Footer"));

var Footer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Footer, _PureComponent);

  function Footer() {
    (0, _classCallCheck2.default)(this, Footer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
  }

  (0, _createClass2.default)(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appearance = _this$props.appearance,
          children = _this$props.children,
          elemBefore = _this$props.elemBefore,
          isFocused = _this$props.isFocused,
          onClick = _this$props.onClick,
          shouldHideSeparator = _this$props.shouldHideSeparator;
      return _react.default.createElement(_Footer.default, {
        onClick: onClick,
        shouldHideSeparator: shouldHideSeparator
      }, _react.default.createElement(_droplist.Item, {
        appearance: appearance,
        elemBefore: elemBefore,
        isFocused: isFocused,
        type: "option"
      }, children));
    }
  }]);
  return Footer;
}(_react.PureComponent);

exports.default = Footer;