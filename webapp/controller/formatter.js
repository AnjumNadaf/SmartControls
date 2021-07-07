sap.ui.define([], function() {
	"use strict";

	return {
        availableColor: function (Expenses) {
            //debugger;
            if (Expenses < 4000) {
                  return sap.ui.core.ValueState.Error;
             } else {
                   return sap.ui.core.ValueState.Success;
           }
        }

    }
	
});



