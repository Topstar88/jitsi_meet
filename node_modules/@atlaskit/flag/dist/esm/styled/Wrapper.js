import { __makeTemplateObject } from "tslib";
import styled, { keyframes } from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
export var flagWidth = gridSize() * 50;
export var flagAnimationTime = 400;
// This is the translateX position that we target when animating a card out
// towards the left of screen.
var exitXPosition = 0 - flagWidth / 2 + "px";
var flagAnimationDuration = flagAnimationTime + "ms";
var animationEnter = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    from {\n      opacity: 0;\n      transform: translate(", ", 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate(0, 0);\n    }\n"], ["\n    from {\n      opacity: 0;\n      transform: translate(", ", 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate(0, 0);\n    }\n"])), exitXPosition);
var animationLeave = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate(", ", 0);\n  }\n"], ["\n  from {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate(", ", 0);\n  }\n"])), exitXPosition);
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
var Wrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  transition: transform ", " ease-in-out;\n  width: ", "px;\n\n  @media (max-width: 560px) {\n    width: 100vw;\n  }\n\n  &:first-child {\n    animation: ", ";\n  }\n\n  &:nth-child(n + 2) {\n    transform: translateX(0) translateY(100%) translateY(", "px);\n  }\n\n  /* Layer the 'primary' flag above the 'secondary' flag */\n  &:nth-child(1) {\n    z-index: 5;\n  }\n  &:nth-child(2) {\n    z-index: 4;\n  }\n\n  /* The 2nd flag should be placed at 0,0 position when the 1st flag is animating out. */\n  ", " &:nth-child(n+4) {\n    display: none;\n  }\n"], ["\n  bottom: 0;\n  position: absolute;\n  transition: transform ", " ease-in-out;\n  width: ", "px;\n\n  @media (max-width: 560px) {\n    width: 100vw;\n  }\n\n  &:first-child {\n    animation: ", ";\n  }\n\n  &:nth-child(n + 2) {\n    transform: translateX(0) translateY(100%) translateY(", "px);\n  }\n\n  /* Layer the 'primary' flag above the 'secondary' flag */\n  &:nth-child(1) {\n    z-index: 5;\n  }\n  &:nth-child(2) {\n    z-index: 4;\n  }\n\n  /* The 2nd flag should be placed at 0,0 position when the 1st flag is animating out. */\n  ",
    " &:nth-child(n+4) {\n    display: none;\n  }\n"])), flagAnimationDuration, flagWidth, getAnimation, 2 * gridSize(), function (_a) {
    var transitionState = _a.transitionState;
    return transitionState === 'exiting'
        ? "\n    && + * {\n      transform: translate(0, 0);\n    }\n  "
        : null;
});
Wrapper.displayName = 'Wrapper';
export default Wrapper;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Wrapper.js.map