/**
 * sg.js
 *
 * Entry point into the program.
 */
 
 
// Initialize Crafty
function initCrafty () {
	Crafty.init(sgGlobal.SCREEN_W, sgGlobal.SCREEN_H, "screen");
	Crafty.scene("debug");
}

window.onload = function() {
	console.log("Stargun v0.0");
	initCrafty();
}