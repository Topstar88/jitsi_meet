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

var _fieldBase = require("@atlaskit/field-base");

var _tagGroup = _interopRequireDefault(require("@atlaskit/tag-group"));

var _tag = _interopRequireDefault(require("@atlaskit/tag"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/chevron-down"));

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _Trigger = require("../styled/Trigger");

var _appearances = require("../internal/appearances");

var Trigger =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Trigger, _PureComponent);

  function Trigger() {
    (0, _classCallCheck2.default)(this, Trigger);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Trigger).apply(this, arguments));
  }

  (0, _createClass2.default)(Trigger, [{
    key: "render",
    // disabled because all of the accessibility is handled manually

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    value: function render() {
      var _this$props = this.props,
          appearance = _this$props.appearance,
          filterValue = _this$props.filterValue,
          handleItemRemove = _this$props.handleItemRemove,
          handleOnChange = _this$props.handleOnChange,
          handleTriggerClick = _this$props.handleTriggerClick,
          inputRefFunction = _this$props.inputRefFunction,
          icon = _this$props.icon,
          isDisabled = _this$props.isDisabled,
          isFocused = _this$props.isFocused,
          isInvalid = _this$props.isInvalid,
          invalidMessage = _this$props.invalidMessage,
          isLoading = _this$props.isLoading,
          isRequired = _this$props.isRequired,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          placeholder = _this$props.placeholder,
          selectedItems = _this$props.selectedItems,
          tagGroupRefFunction = _this$props.tagGroupRefFunction;
      return _react.default.createElement(_fieldBase.FieldBaseStateless, {
        appearance: (0, _appearances.mapAppearanceToFieldBase)(appearance),
        isDisabled: isDisabled,
        isFitContainerWidthEnabled: true,
        isDialogOpen: isFocused,
        isFocused: isFocused,
        isInvalid: isInvalid,
        invalidMessage: invalidMessage,
        isPaddingDisabled: true,
        isRequired: isRequired,
        onBlur: onBlur,
        onFocus: onFocus
      }, _react.default.createElement(_Trigger.TriggerDiv, {
        isDisabled: isDisabled,
        onClick: handleTriggerClick
      }, _react.default.createElement(_Trigger.Content, null, _react.default.createElement(_tagGroup.default, {
        ref: tagGroupRefFunction
      }, selectedItems.map(function (item) {
        return _react.default.createElement(_tag.default, {
          appearance: item.tag ? item.tag.appearance : undefined,
          elemBefore: item.tag ? item.tag.elemBefore : undefined,
          key: item.value,
          onAfterRemoveAction: function onAfterRemoveAction() {
            handleItemRemove(item);
          },
          removeButtonText: isDisabled ? undefined : "".concat(item.content, ", remove"),
          text: item.content
        });
      }), isDisabled ? null : _react.default.createElement(_Trigger.Input, {
        disabled: isDisabled,
        onChange: handleOnChange,
        placeholder: placeholder,
        innerRef: inputRefFunction,
        type: "text",
        value: filterValue
      }))), _react.default.createElement(_Trigger.Expand, null, isFocused && isLoading ? _react.default.createElement(_spinner.default, null) : icon)));
    }
    /* eslint-enable jsx-a11y/no-static-element-interactions */

  }]);
  return Trigger;
}(_react.PureComponent);

exports.default = Trigger;
(0, _defineProperty2.default)(Trigger, "defaultProps", {
  isDisabled: false,
  isLoading: false,
  onClick: function onClick() {},
  icon: _react.default.createElement(_chevronDown.default, {
    label: ""
  })
});