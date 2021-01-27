let plot1 = document.querySelector("#plot1");
let plot2 = document.querySelector("#plot2");
let plot3 = document.querySelector("#plot3");
let plot4 = document.querySelector("#plot4");
let plot5 = document.querySelector("#plot5");
let plot6 = document.querySelector("#plot6");

let gardener = document.querySelector("#gardener");
let wateringCan = document.querySelector("#watering-can");
// let wateringCan = $("#watering-can");
let plant1 = document.querySelector("#plant1");
let plant2 = document.querySelector("#plant2");
let plant3 = document.querySelector("#plant3");

let blurbs = document.querySelectorAll(".blurb");

// let plot1Location = plot1.getBoundingClientRect().top;
// let plot2Location = plot2.getBoundingClientRect().top;
// let plot3Location = plot3.getBoundingClientRect().top;
// let plot4Location = plot4.getBoundingClientRect().top;
// let plot5Location = plot5.getBoundingClientRect().top;
// let plot6Location = plot6.getBoundingClientRect().top;

let plot1Location = plot1.offsetTop;
let plot2Location = plot2.offsetTop;
let plot3Location = plot3.offsetTop;
let plot4Location = plot4.offsetTop;
let plot5Location = plot5.offsetTop;
let plot6Location = plot6.offsetTop;
// function moveWateringCan1() {
// 	let plant2Left = plant2.getBoundingClientRect().left;
// 	let plant2Top = plant2.getBoundingClientRect().top;

// 	wateringCan.animate({
// 		left: `${plant2Left + 200}px`,
// 		top: `${plant2Top - 200}px`
// 	}, 2000);
// }

// let blurbs = $(".blurb");

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

//based on Wes Bos's Javascript30
// function checkSlide(e) {
// 	blurbs.forEach(blurb => {
// 		console.log(blurb.height)
// 		// halfway through the blurb
// 		let slideInAt = (window.scrollY + window.innerHeight) - parseInt(blurb.height / 2);
// 		console.log(slideInAt);
// 		// bottom of the blurb
// 		let blurbBottom = blurb.offsetTop + blurb.height;
// 		let isHalfShown = slideInAt > blurb.offsetTop;
// 		let isNotScrolledPast = window.scrollY < blurbBottom;
// 		if(isHalfShown && isNotScrolledPast) {
// 			console.log("ding")
// 			blurb.classList.add("display");
// 		}
// 	});
// }

function checkSlide() {
	// console.log(`we are at ${window.scrollY}`);
	// console.log(`plot1 starts at ${plot1.getBoundingClientRect().top}`);
	// console.log(`plot2 starts at ${plot2.getBoundingClientRect().top}`);
	// console.log(`plot3 starts at ${plot3.getBoundingClientRect().top}`);
	// console.log(`plot4 starts at ${plot4.getBoundingClientRect().top}`);
	// console.log(`plot5 starts at ${plot5.getBoundingClientRect().top}`);
	// console.log(`plot6 starts at ${plot6.getBoundingClientRect().top}`);


	if (window.scrollY >= plot1Location - 500) {
		console.log("show1")
		blurb1.classList.add("display");
	}

	if (window.scrollY >= plot2Location - 500) {
		console.log("show2");
		blurb2.classList.add("display");
	}

	if (window.scrollY >= plot3Location - 500) {
		console.log("show3")
		blurb3.classList.add("display");
	}

	if (window.scrollY >= plot4Location - 500) {
		console.log("show4")
		blurb4.classList.add("display");
	}

	if (window.scrollY >= plot5Location - 500) {
		console.log("show5")
		blurb5.classList.add("display");
	}

	if (window.scrollY >= plot6Location - 500) {
		console.log("show6")
		blurb6.classList.add("display");
	}
}

window.addEventListener("scroll", debounce(checkSlide));


function activatePlot1() {

	// moveWateringCan1();

	plant1.classList.add("activated");
	plant2.classList.add("activated");
	plant3.classList.add("activated");


}

plot1.addEventListener("click", activatePlot1);
