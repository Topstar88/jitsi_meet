"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabsWithoutAnalytics = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNext = require("@atlaskit/analytics-next");

var _package = require("../../package.json");

var _TabsNavigation = _interopRequireDefault(require("./TabsNavigation"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _TabItem = _interopRequireDefault(require("./TabItem"));

var _styled = require("../styled");

var defaultIsSelectedTestNumber = function defaultIsSelectedTestNumber(selectedIndex, tab, tabIndex) {
  return selectedIndex === tabIndex;
};

var defaultIsSelectedTestObject = function defaultIsSelectedTestObject(selected, tab) {
  return selected === tab;
};

var defaultComponents = {
  Content: _TabContent.default,
  Item: _TabItem.default
};

var Tabs =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Tabs, _Component);

  function Tabs(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tabs);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tabs).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "resolveSelected", function (selected, newProps) {
      var _ref = newProps || _this.props,
          tabs = _ref.tabs,
          isSelectedTest = _ref.isSelectedTest;

      var testFunction = function () {
        if (isSelectedTest) {
          return isSelectedTest;
        }

        if (typeof selected === 'number') {
          return defaultIsSelectedTestNumber;
        }

        return defaultIsSelectedTestObject;
      }();

      return tabs.find(function (tab, tabIndex) {
        return testFunction(selected, tab, tabIndex);
      }) || tabs[0];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onSelect", function (newselected, newSelectedIndex) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          selected = _this$props.selected;

      if (typeof onSelect === 'function') {
        onSelect(newselected, newSelectedIndex);
      }

      if (typeof selected === 'undefined') {
        _this.setState({
          selected: newselected
        });
      }
    });
    var initiallyselected = _this.props.selected || _this.props.defaultSelected || _this.props.tabs[0];

    var _selected = _this.resolveSelected(initiallyselected);

    _this.state = {
      selected: _selected
    };
    return _this;
  }

  (0, _createClass2.default)(Tabs, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (typeof newProps.selected !== 'undefined' && newProps.selected !== this.state.selected) {
        var selected = this.resolveSelected(newProps.selected, newProps);
        this.setState({
          selected: selected
        });
      } else if (newProps.tabs !== this.props.tabs) {
        var updatedselected = this.resolveSelected(this.state.selected, newProps);
        this.setState({
          selected: updatedselected
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          components = _this$props2.components,
          tabs = _this$props2.tabs;
      var selected = this.state.selected;

      var _defaultComponents$co = (0, _objectSpread2.default)({}, defaultComponents, components),
          Content = _defaultComponents$co.Content,
          Item = _defaultComponents$co.Item;

      var contentProps = {
        data: selected,
        elementProps: {
          role: 'tabpanel'
        }
      };
      return _react.default.createElement(_styled.Tabs, null, _react.default.createElement(_TabsNavigation.default, {
        component: Item,
        onSelect: this.onSelect,
        selected: selected,
        tabs: tabs
      }), _react.default.createElement(Content, contentProps));
    }
  }]);
  return Tabs;
}(_react.Component);

exports.TabsWithoutAnalytics = Tabs;
(0, _defineProperty2.default)(Tabs, "defaultProps", {
  components: {}
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'tabs',
  packageName: _package.name,
  packageVersion: _package.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onSelect: createAndFireEventOnAtlaskit({
    action: 'clicked',
    actionSubject: 'tab',
    attributes: {
      componentName: 'tabs',
      packageName: _package.name,
      packageVersion: _package.version
    }
  })
})(Tabs));

exports.default = _default;