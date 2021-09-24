"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (channel) { return function (payload) { return function (createAnalyticsEvent) {
    var consumerEvent = createAnalyticsEvent(payload);
    var clonedEvent = consumerEvent.clone();
    if (clonedEvent) {
        clonedEvent.fire(channel);
    }
    return consumerEvent;
}; }; });
//# sourceMappingURL=createAndFireEvent.js.map