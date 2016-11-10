/* *
 * sgEvent.js
 *
 * Stargun event registry.
 * 
 * */

/* *
 * ScrollSpeed (data)
 * Responders to the ScrollSpeed event can reference the passed data object:
 * data { cur : { x, y }
		  old : { x, y } }
 * for more detailed calculations.
 * */

/* *
 * sgSetScrollSpeed (x, y)
 * x : the 'speed' at which the player is moving.
 * y : the 'speed' at which the player is moving horizontally.
 * */
function sgSetScrollSpeed (x, y) {
	sgGlobal.oldSpeed = sgGlobal.speed;
	sgGlobal.speed = { x:x, y:y };
	Crafty.trigger("ScrollSpeed", { cur: sgGlobal.speed, old: sgGlobal.oldSpeed });
}