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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../styled");

var TabsNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TabsNavigation, _Component);

  function TabsNavigation() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TabsNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TabsNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "elementRefs", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "tabKeyDownHandler", function (e) {
      if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) {
        return;
      }

      var _this$props = _this.props,
          selected = _this$props.selected,
          tabs = _this$props.tabs;
      var modifier = e.key === 'ArrowRight' ? 1 : -1;
      var newselectedIndex = tabs.indexOf(selected) + modifier;

      if (newselectedIndex < 0 || newselectedIndex >= tabs.length) {
        return;
      }

      _this.onSelect(tabs[newselectedIndex], newselectedIndex);

      _this.elementRefs[newselectedIndex].focus();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onSelect", function (selected, selectedIndex) {
      _this.props.onSelect(selected, selectedIndex);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "tabMouseDownHandler", function (e) {
      return e.preventDefault();
    });
    return _this;
  }

  (0, _createClass2.default)(TabsNavigation, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.tabs !== this.props.tabs) {
        this.elementRefs = [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          selected = _this$props2.selected,
          Item = _this$props2.component,
          tabs = _this$props2.tabs;
      return _react.default.createElement(_styled.NavWrapper, null, _react.default.createElement(_styled.NavLine, {
        status: "normal"
      }), _react.default.createElement(_styled.Nav, {
        role: "tablist"
      }, tabs.map(function (tab, index) {
        var isSelected = tab === selected;
        var elementProps = {
          'aria-posinset': index + 1,
          'aria-selected': isSelected,
          'aria-setsize': tabs.length,
          onClick: function onClick() {
            return _this2.onSelect(tab, index);
          },
          onKeyDown: _this2.tabKeyDownHandler,
          onMouseDown: _this2.tabMouseDownHandler,
          role: 'tab',
          tabIndex: isSelected ? 0 : -1
        };

        var innerRef = function innerRef(ref) {
          _this2.elementRefs[index] = ref;
        };

        var itemProps = {
          elementProps: elementProps,
          innerRef: innerRef,
          data: tab,
          isSelected: isSelected
        }; // eslint-disable-next-line react/no-array-index-key

        return _react.default.createElement(Item, (0, _extends2.default)({
          key: index
        }, itemProps));
      })));
    }
  }]);
  return TabsNavigation;
}(_react.Component);

exports.default = TabsNavigation;