let plot1 = document.querySelector("#plot1");
let gardener = document.querySelector("#gardener");
// let wateringCan = document.querySelector("#watering-can");
let wateringCan = $("#watering-can");
let plant1 = document.querySelector("#plant1");
let plant2 = document.querySelector("#plant2");
let plant3 = document.querySelector("#plant3");

let blurb1 = $("#blurb1");

function moveWateringCan1() {
	let plant2Left = plant2.getBoundingClientRect().left;
	let plant2Top = plant2.getBoundingClientRect().top;

	wateringCan.animate({
		left: `${plant2Left + 200}px`,
		top: `${plant2Top - 200}px`
	}, 2000);
}

function showBlurb1() {
	blurb1.addClass("display");
}

function activatePlot1() {

	moveWateringCan1();

	plant1.classList.add("activated");
	plant2.classList.add("activated");
	plant3.classList.add("activated");

	showBlurb1();
}

plot1.addEventListener("click", activatePlot1);
