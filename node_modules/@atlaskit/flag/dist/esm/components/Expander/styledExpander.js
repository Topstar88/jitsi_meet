import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
export default styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ", ";\n  transition: max-height 0.3s, opacity 0.3s;\n"], ["\n  max-height: ",
    "px;\n  opacity: ", ";\n  overflow: ",
    ";\n  transition: max-height 0.3s, opacity 0.3s;\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 150 : 0;
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 1 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 'visible' : 'hidden';
});
var templateObject_1;
//# sourceMappingURL=styledExpander.js.map