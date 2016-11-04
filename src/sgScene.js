/**
 * sgScene.js
 *
 * Stargun Scenes
 */

// Default scene - Black background.
Crafty.defineScene("default", function() {
	Crafty.background("#000000");
});

// Debug scene - Debugging mode.
Crafty.defineScene("debug", function() {
	Crafty.background("#000000");
	dPrint("--- Stargun debug mode ---");
	Crafty.e("StaticMine");
	sgScrollSpeed(-32, 0);
});