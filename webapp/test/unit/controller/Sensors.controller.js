/*global QUnit*/

sap.ui.define([
	"keepcool/sensormanager/controller/Sensors.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Sensors Controller");

	QUnit.test("I should test the Sensors controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
