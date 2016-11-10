/**
 * sgShip.js
 *
 * Stargun Ship Components - All components in this file must be derived from
 * the Ship component.
 */

/* *
 * StaticMine
 *
 * Just a dumb mine - Moves very predictibly.
 * */
Crafty.c("StaticMine", {
	init : function() {
		this.requires("EnemyShip");
		this.w = 32;
		this.h = 32;
	}
});