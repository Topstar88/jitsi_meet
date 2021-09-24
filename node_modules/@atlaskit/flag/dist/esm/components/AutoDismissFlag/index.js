import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import Flag from '../Flag';
export var AUTO_DISMISS_SECONDS = 8;
var AutoDismissFlag = /** @class */ (function (_super) {
    __extends(AutoDismissFlag, _super);
    function AutoDismissFlag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startAutoDismissTimer = function () {
            if (!_this.isAutoDismissAllowed()) {
                return;
            }
            _this.stopAutoDismissTimer();
            _this.autoDismissTimer = window.setTimeout(_this.handleAutoDismissTimerEnd, AUTO_DISMISS_SECONDS * 1000);
        };
        _this.stopAutoDismissTimer = function () {
            if (_this.autoDismissTimer) {
                clearTimeout(_this.autoDismissTimer);
                _this.autoDismissTimer = null;
            }
        };
        _this.dismissFlag = function () {
            if (_this.isAutoDismissAllowed() && _this.props.onDismissed) {
                _this.props.onDismissed(_this.props.id);
            }
        };
        _this.handleAutoDismissTimerEnd = function () {
            _this.dismissFlag();
        };
        _this.handleInteractionStart = function () {
            _this.stopAutoDismissTimer();
        };
        _this.isAutoDismissAllowed = function () {
            return _this.props.isDismissAllowed && _this.props.onDismissed;
        };
        _this.handleInteractionEnd = function () {
            _this.startAutoDismissTimer();
        };
        return _this;
    }
    AutoDismissFlag.prototype.componentDidMount = function () {
        this.startAutoDismissTimer();
    };
    AutoDismissFlag.prototype.componentWillUnmount = function () {
        this.stopAutoDismissTimer();
    };
    AutoDismissFlag.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.isDismissAllowed && !prevProps.isDismissAllowed) {
            this.startAutoDismissTimer();
        }
        else if (!this.props.isDismissAllowed && prevProps.isDismissAllowed) {
            this.stopAutoDismissTimer();
        }
    };
    AutoDismissFlag.prototype.render = function () {
        return (React.createElement(Flag, __assign({ onMouseOver: this.handleInteractionStart, onFocus: this.handleInteractionStart, onMouseOut: this.handleInteractionEnd, onBlur: this.handleInteractionEnd }, this.props)));
    };
    return AutoDismissFlag;
}(Component));
export default AutoDismissFlag;
//# sourceMappingURL=index.js.map