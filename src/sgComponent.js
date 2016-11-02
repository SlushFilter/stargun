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
		this.requires("2D, Collision, Motion");
		// ++DEBUG
		this.addComponent("DebugCanvas, VisibleMBR")
			.debugStroke("#0080FF")
			.debugFill("#0000FF")
			.debugAlpha(0.25);
		// --DEBUG
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