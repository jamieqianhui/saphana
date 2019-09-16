sap.ui.jsview("fareast.web.view.View", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View
	 */
	getControllerName: function () {
		return "fareast.web.controller.View";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View
	 */
	createContent: function (oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});