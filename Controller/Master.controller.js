sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.app.demo.project1.controller.Master", {
            onInit: function () {

                var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
                oRoute.getRoute("RouteMaster").attachPatternMatched(this._onMatched, this);
            },
            _onMatched:function(oEvent)
            {
                //var oProduct = oEvent.getParameter("arguments");
            }
        });
    });
