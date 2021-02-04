let plot1 = document.querySelector("#plot1");
let plot2 = document.querySelector("#plot2");
let plot3 = document.querySelector("#plot3");
let plot4 = document.querySelector("#plot4");
let plot5 = document.querySelector("#plot5");
let plot6 = document.querySelector("#plot6");

let gardener = document.querySelector("#gardener");
let wateringCan = document.querySelector("#watering-can");
let plant1 = document.querySelector("#plant1");
let plant2 = document.querySelector("#plant2");
let plant3 = document.querySelector("#plant3");

let blurbs = document.querySelectorAll(".blurb");

let wateringCode1 = document.querySelector("#watering-code1");
let wateringCanWater = document.querySelector("#watering-can-water");

let plot1Location = plot1.offsetTop;
let plot2Location = plot2.offsetTop;
let plot3Location = plot3.offsetTop;
let plot4Location = plot4.offsetTop;
let plot5Location = plot5.offsetTop;
let plot6Location = plot6.offsetTop;


function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function checkSlide() {
	// console.log(`we are at ${window.scrollY}`);
	// console.log(`plot1 starts at ${plot1.getBoundingClientRect().top}`);
	// console.log(`plot2 starts at ${plot2.getBoundingClientRect().top}`);
	// console.log(`plot3 starts at ${plot3.getBoundingClientRect().top}`);
	// console.log(`plot4 starts at ${plot4.getBoundingClientRect().top}`);
	// console.log(`plot5 starts at ${plot5.getBoundingClientRect().top}`);
	// console.log(`plot6 starts at ${plot6.getBoundingClientRect().top}`);


	if (window.scrollY >= plot1Location - 600) {
		console.log("show1")
		blurb1.classList.add("display");
	}

	if (window.scrollY >= plot2Location - 600) {
		console.log("show2");
		blurb2.classList.add("display");
	}

	if (window.scrollY >= plot3Location - 600) {
		console.log("show3")
		blurb3.classList.add("display");
	}

	if (window.scrollY >= plot4Location - 600) {
		console.log("show4")
		blurb4.classList.add("display");
	}

	if (window.scrollY >= plot5Location - 600) {
		console.log("show5")
		blurb5.classList.add("display");
	}

	if (window.scrollY >= plot6Location - 600) {
		console.log("show6")
		blurb6.classList.add("display");
	}
}

window.addEventListener("scroll", debounce(checkSlide));


function activatePlot1() {

	wateringCan.classList.add("activated");
	// wateringCode1.classList.add("activated");
	wateringCanWater.classList.add("activated");
	plant1.classList.add("activated");
	plant2.classList.add("activated");
	plant3.classList.add("activated");


}

wateringCan.addEventListener("click", activatePlot1);
