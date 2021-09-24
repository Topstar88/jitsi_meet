"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styledExpander_1 = tslib_1.__importDefault(require("./styledExpander"));
var Expander = /** @class */ (function (_super) {
    tslib_1.__extends(Expander, _super);
    function Expander() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isAnimating: false };
        _this.handleTransitionEnd = function () {
            _this.setState({ isAnimating: false });
        };
        return _this;
    }
    Expander.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.isExpanded !== nextProps.isExpanded) {
            this.setState({ isAnimating: true });
        }
    };
    Expander.prototype.render = function () {
        var _a = this.props, children = _a.children, isExpanded = _a.isExpanded;
        var isAnimating = this.state.isAnimating;
        // Need to always render the ExpanderInternal otherwise the
        // reveal transiton doesn't happen. We can't use CSS animation for
        // the the reveal because we don't know the height of the content.
        var childrenIfExpanded = isAnimating || isExpanded ? children : null;
        return (react_1.default.createElement(styledExpander_1.default, { "aria-hidden": !isExpanded, isExpanded: isExpanded, onTransitionEnd: this.handleTransitionEnd }, childrenIfExpanded));
    };
    // eslint-disable-line react/sort-comp
    Expander.defaultProps = { isExpanded: false };
    return Expander;
}(react_1.Component));
exports.default = Expander;
//# sourceMappingURL=index.js.map