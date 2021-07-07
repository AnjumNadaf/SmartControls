sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("smartcontrols.controller.View2", {

        /**
         * @override
         */
        onInit: function() {
           this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          
           this.oRouter.attachRoutePatternMatched(this.onClickList, this);

            
        
        },

        onClickList:function(oEvent){
            debugger;
            this.pathData = oEvent.getParameter("arguments").data;
            var add = "/" + this.pathData;
            this.getView().byId("smartForm").bindElement(add);
            console.log(this.pathData);

        },

        onNavBack:function(){

        this.oRouter.navTo("RouteView1");
        }
	});
});