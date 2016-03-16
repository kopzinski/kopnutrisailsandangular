System.register(['angular2/platform/browser', './toh.component', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, toh_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (toh_component_1_1) {
                toh_component_1 = toh_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(toh_component_1.TohComponent);
        }
    }
});
//bootstrap(AppComponent);
//bootstrap(WikiComponent);
//bootstrap(WikiSmartComponent);
//# sourceMappingURL=main.js.map