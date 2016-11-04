/* *
 * sgUtil.js
 *
 * Stargun Utility Functions
 */

// ++Debug
sgGlobal.dPrint = {
	y: 0,
	yStep: 10,
	lines: []
}

function dPrint(text) {
	var py = sgGlobal.dPrint.y;
	// Create the text entity.
	var e = Crafty.e("DebugText")
			.attr({ y : py })
			.text(text);

	// Add it to the line list.
	sgGlobal.dPrint.lines.push(e);
	
	// Adjust text positions and remove the oldest line.
	py += sgGlobal.dPrint.yStep;
	if(py >= sgGlobal.SCREEN_H) {
		sgGlobal.dPrint.lines.shift().destroy();
		for(i in sgGlobal.dPrint.lines) {
			sgGlobal.dPrint.lines[i].y -= sgGlobal.dPrint.yStep;
		}
	} else {
		sgGlobal.dPrint.y = py;
	}
}
// --DEBUG