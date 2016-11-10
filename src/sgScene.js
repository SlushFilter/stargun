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
	Crafty.e("StaticMine").attr({x:640});
	Crafty.e("StaticMine").attr({x:540});
	Crafty.e("StaticMine").attr({x:440});
	Crafty.e("StaticMine").attr({x:500});
	Crafty.e("StaticMine").attr({x:640});
	Crafty.e("StaticMine").attr({x:480});
	Crafty.e("StaticMine").attr({x:380});
	Crafty.e("StaticMine").attr({x:240});
	Crafty.e("StaticMine").attr({x:140});
	Crafty.e("StaticMine").attr({x:80});
	Crafty.e("StaticMine").attr({x:20});
	Crafty.e("StaticMine").attr({x:16});
	
	sgSetScrollSpeed(-32, 0);
});