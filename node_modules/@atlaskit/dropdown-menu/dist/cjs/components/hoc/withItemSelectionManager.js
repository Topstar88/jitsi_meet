"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = _interopRequireDefault(require("../../util/getDisplayName"));

var _DropdownItemSelectionManager = _interopRequireDefault(require("../context/DropdownItemSelectionManager"));

// HOC that typically wraps @atlaskit/item/ItemGroup
var withDropdownItemSelectionManager = function withDropdownItemSelectionManager(WrappedComponent, selectionBehavior) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithDropdownItemSelectionManager, _Component);

    function WithDropdownItemSelectionManager() {
      (0, _classCallCheck2.default)(this, WithDropdownItemSelectionManager);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithDropdownItemSelectionManager).apply(this, arguments));
    }

    (0, _createClass2.default)(WithDropdownItemSelectionManager, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            id = _this$props.id,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "id"]);
        return _react.default.createElement(WrappedComponent, otherProps, _react.default.createElement(_DropdownItemSelectionManager.default, {
          groupId: id,
          behavior: selectionBehavior
        }, children));
      }
    }]);
    return WithDropdownItemSelectionManager;
  }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", "WithDropdownItemSelectionManager(".concat((0, _getDisplayName.default)(WrappedComponent), ")")), _temp;
};

var _default = withDropdownItemSelectionManager;
exports.default = _default;