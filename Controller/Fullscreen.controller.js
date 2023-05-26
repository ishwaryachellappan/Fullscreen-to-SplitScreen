sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.app.demo.project1.controller.Fullscreen", {
            onInit: function () {

            },
            onFullscreen: function (oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMaster");
            }
        });
    });
