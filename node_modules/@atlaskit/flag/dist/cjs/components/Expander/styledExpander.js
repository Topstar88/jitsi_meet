"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ", ";\n  transition: max-height 0.3s, opacity 0.3s;\n"], ["\n  max-height: ",
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