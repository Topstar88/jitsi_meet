"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
exports.flagWidth = constants_1.gridSize() * 50;
exports.flagAnimationTime = 400;
// This is the translateX position that we target when animating a card out
// towards the left of screen.
var exitXPosition = 0 - exports.flagWidth / 2 + "px";
var flagAnimationDuration = exports.flagAnimationTime + "ms";
var animationEnter = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    from {\n      opacity: 0;\n      transform: translate(", ", 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate(0, 0);\n    }\n"], ["\n    from {\n      opacity: 0;\n      transform: translate(", ", 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate(0, 0);\n    }\n"])), exitXPosition);
var animationLeave = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  from {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate(", ", 0);\n  }\n"], ["\n  from {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate(", ", 0);\n  }\n"])), exitXPosition);
var getAnimation = function (_a) {
    var transitionState = _a.transitionState;
    if (transitionState === 'entering') {
        return animationEnter + " " + flagAnimationDuration;
    }
    if (transitionState === 'exiting') {
        return animationLeave + " " + flagAnimationDuration;
    }
    return 'initial';
};
var Wrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  transition: transform ", " ease-in-out;\n  width: ", "px;\n\n  @media (max-width: 560px) {\n    width: 100vw;\n  }\n\n  &:first-child {\n    animation: ", ";\n  }\n\n  &:nth-child(n + 2) {\n    transform: translateX(0) translateY(100%) translateY(", "px);\n  }\n\n  /* Layer the 'primary' flag above the 'secondary' flag */\n  &:nth-child(1) {\n    z-index: 5;\n  }\n  &:nth-child(2) {\n    z-index: 4;\n  }\n\n  /* The 2nd flag should be placed at 0,0 position when the 1st flag is animating out. */\n  ", " &:nth-child(n+4) {\n    display: none;\n  }\n"], ["\n  bottom: 0;\n  position: absolute;\n  transition: transform ", " ease-in-out;\n  width: ", "px;\n\n  @media (max-width: 560px) {\n    width: 100vw;\n  }\n\n  &:first-child {\n    animation: ", ";\n  }\n\n  &:nth-child(n + 2) {\n    transform: translateX(0) translateY(100%) translateY(", "px);\n  }\n\n  /* Layer the 'primary' flag above the 'secondary' flag */\n  &:nth-child(1) {\n    z-index: 5;\n  }\n  &:nth-child(2) {\n    z-index: 4;\n  }\n\n  /* The 2nd flag should be placed at 0,0 position when the 1st flag is animating out. */\n  ",
    " &:nth-child(n+4) {\n    display: none;\n  }\n"])), flagAnimationDuration, exports.flagWidth, getAnimation, 2 * constants_1.gridSize(), function (_a) {
    var transitionState = _a.transitionState;
    return transitionState === 'exiting'
        ? "\n    && + * {\n      transform: translate(0, 0);\n    }\n  "
        : null;
});
Wrapper.displayName = 'Wrapper';
exports.default = Wrapper;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Wrapper.js.map