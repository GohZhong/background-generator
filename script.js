var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var c = '';
  	while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  	}
  	return '#' + c;
}


function editColor() {
	color1.value = randomColor()
	color2.value = randomColor()
	setGradient()
}

setGradient()

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", editColor);