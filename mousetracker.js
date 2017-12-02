var elementsToLog = [
	"move",
	"your",
	"mouse"
];
var mice = new Array();
window.unload = function(event) {event.preventDefault();return -1;};
window.onload = function() {
		for(var i = 0; i < elementsToLog.length; i++) {
		document.getElementById(elementsToLog[i]).addEventListener('click', function(){
			console.log(this.id + " clicked.");
		}, false);
	}
};
document.addEventListener('DOMContentLoaded', function() {
	var mX = 0;
	var mY = 0;
	var Mouse = function(mX, mY){
		this.X = mX;
		this.Y = mY;
	};
	console.log("Initiating mouse tracker...");
	document.addEventListener('mousemove', function(event) {
		var mlocX = event.clientX;
		var mlocY = event.clientY;
		var m = new Mouse(mlocX, mlocY);
		mice.push(m);
		console.log(m);
	}, false);
}, false);