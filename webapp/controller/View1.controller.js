sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"smartcontrols/controller/formatter"

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, formatter) {
		"use strict";

		return Controller.extend("smartcontrols.controller.View1", {
			formatter:formatter,
			onInit: function () {
				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			},

			onSelectionChangeChange:function(){
				debugger;
				//this.oRouter.navTo("RouteView2");

				var gettingInternalTable = this.getView().byId("tableid1");
				var path = gettingInternalTable._aSelectedPaths[0];
				 var str = path.replace("/","");
				this.oRouter.navTo("RouteView2",{
					data:str
				})
				//var oSmartTable = this.getView().byId("smarttableid2").getTable().getObject();
				
				
			//var path = 	oSmartTable.getTableBindingPath();
				//var data = oSmartTable.getTable().attachRowSelectionChange
                //var gettingAllRows = gettingInternalTable.getRows();
               //var  oSelIndices = gettingInternalTable.getSelectedIndices();
               //oSelIndices will have index of the rows
        //      for(var i of oSelIndices){
        //          console.log(gettingAllRows[i].getBindingContext().getObject())
        //  }  

			}
		});
	});
