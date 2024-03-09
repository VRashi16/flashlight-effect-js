let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");
const isTouchDevice = () => {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
};

function getMousePosition(e) {
	mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
	mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

	flashlight.style.setProperty("--Xposition", mouseX + "px");
	flashlight.style.setProperty("--Yposition", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);
