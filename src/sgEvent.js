/* *
 * sgEvent.js
 *
 * Stargun event registry.
 * 
 * */
 
/* *
 * sgScrollSpeed (x, y)
 * x : the 'speed' at which the player is moving.
 * y : the 'speed' at which the player is moving horizontally.
 *
 * Responders to the ScrollSpeed event can reference the passed data object:
 * data { cur : { x, y }
		  old : { x, y } }
 * for more detailed calculations.
 * */
 
function sgScrollSpeed (x, y) {
	
	sgGlobal.oldSpeed = sgGlobal.speed;
	sgGlobal.speed = { x:x, y:y };
	Crafty.trigger("ScrollSpeed", { cur: sgGlobal.speed, old: sgGlobal.oldSpeed });
}