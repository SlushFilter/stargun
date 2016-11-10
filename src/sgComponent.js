/* *
 * sgComponent.js
 *
 * Stargun Components
 */

/* *
 * Entity Tag Defenitions
 * A list of stateless properies of an entity.
 * */ 
(function() {
	var sgTags = [
		"Solid",
		"Ballistic",
		"Energy"
	]
	
	// Build the Crafty components for each tag.
	for(tag in sgTags) {
		Crafty.c(sgTags[tag], { init : function() {} });
	}	
})();

/* *
 * Ship
 * Base component for defining a ship.
 * */
Crafty.c("Ship", {
	init : function() {
		this.requires("2D, Canvas, Collision, Motion");
		// ++DEBUG
		// this.addComponent("DebugGfx");
		// --DEBUG
	}
});

Crafty.c("EnemyShip", {
	init : function() {
		this.requires("Ship, gfxSpaceMine");
		// Initialize speed.
		var v = this.velocity();
		v.x = sgGlobal.speed.x;
		v.y = sgGlobal.speed.y;
		// Bind scrolling event.
		this.bind("ScrollSpeed", this._changeSpeed);
		// Bind bounds checking.
		this.bind("Moved", this._checkBounds);
	},
	_changeSpeed : function(speed) {
		var v = this.velocity();
		v.x = v.x + (speed.cur.x - speed.old.x);
		v.y = v.y + (speed.cur.y - speed.old.y);
	},
	_checkBounds : function() {
		if(this._x <= -this._w) { 
			this.destroy(); 
			console.log("Kaboom");
		}
	}
});

 /* *
  * Star
  * Star component for the background scroller.
  * */
Crafty.c("Star", {
	init : function() {
		this.requires("2D, Canvas, Color");
		var size = Math.floor((Math.random() * 3) + 1);
		console.log(size);
		this.w = size;
		this.h = size;
		this.z = size;
		this.color("#FFFFFF");
	}
});

/* *
 * Scroller
 * This is the component for a sidescrolling environment.
 * Having this entity active continually pushes everything by a negative of the player's velocity.
 * */
Crafty.c("")
// ++DEBUG
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Debugging Components

/* *
 * DebugGfx
 * Default visible debug box.
 * */
Crafty.c("DebugGfx", {
	init : function() {
		this.requires("DebugCanvas, VisibleMBR");
		this.debugStroke("#0080FF")
			.debugFill("#0000FF")
			.debugAlpha(0.25);
	}
});
/* *
 * DebugText
 * Component for debugging text.
 * */
Crafty.c("DebugText", {
	init : function() {
		this.requires("2D, Canvas, Text");
		this.textColor("#FFFF00");
	},
});

// --DEBUG