
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();

let workTile = document.querySelector("#work-tile");
let aboutTile = document.querySelector("#about-tile");
let contactTile = document.querySelector("#contact-tile");
let squareTitleWork = document.querySelector(".square-title-work");
let squareTitleAbout = document.querySelector(".square-title-about");
let squareTitleContact = document.querySelector(".square-title-contact");
let allSquares = document.querySelector(".squares");
let navbarWork = document.querySelector(".navbar-work");
let navbarAbout = document.querySelector(".navbar-about");
let navbarContact = document.querySelector(".navbar-contact");
let portfolio = document.querySelector(".portfolio");
let contact = document.querySelector(".contact");
let aboutMe = document.querySelector(".about-me");
let squareOne = document.querySelector(".square1");
let squareTwo = document.querySelector(".square2"); 
let squareThree = document.querySelector(".square3"); 
let squareFour = document.querySelector(".square4"); 
let logoDesktop = document.querySelector(".logo-desktop");

const breakpoint = window.matchMedia( "(min-width: 600px)" );

workTile.onclick = function(e) {
	e.preventDefault();

	logoDesktop.classList.toggle("active");

	if (breakpoint.matches) {
	  if (!squareTwo.classList.contains("first-square")) {
			squareOne.classList.remove("first-square");
			squareThree.classList.remove("first-square");
			squareFour.classList.remove("first-square");
			squareTwo.classList.add("first-square");
		} else {
			squareTwo.classList.remove("first-square");
		}

		// let timeline = new TimelineLite();
		// timeline.to((allSquares), 2, {scale: 1, rotation: 0});
		// timeline.to((allSquares), 2, {scale: 2, top: "50%"});


		portfolio.classList.toggle("active");

		this.classList.toggle("active2");
		allSquares.classList.toggle("active");
		squareTitleWork.classList.toggle("activeTitleWork");
		navbarWork.classList.toggle("active");

		squareOne.classList.toggle("active1");
		squareTwo.classList.toggle("active2");
		squareThree.classList.toggle("active3");
		squareFour.classList.toggle("active4");
	} else {
		console.log("test");
		let portfolioMobile = document.querySelector(".portfolio-mobile");
		portfolioMobile.classList.toggle("active");
	}
};


aboutTile.onclick = function(e) {
	e.preventDefault();
	
	logoDesktop.classList.toggle("active");

	if (breakpoint.matches) {
		if (!squareThree.classList.contains("first-square")) {
			squareOne.classList.remove("first-square");
			squareTwo.classList.remove("first-square");
			squareFour.classList.remove("first-square");
			squareThree.classList.add("first-square");
		} else {
			squareThree.classList.remove("first-square");
		}

		aboutMe.classList.toggle("active");

		this.classList.toggle("active3");
		allSquares.classList.toggle("active");
		squareTitleAbout.classList.toggle("activeTitleAbout");
		navbarAbout.classList.toggle("active");

		squareOne.classList.toggle("active1");
		squareTwo.classList.toggle("active2");
		squareThree.classList.toggle("active3");
		squareFour.classList.toggle("active4");
	} else {
		console.log("test active");
		let aboutMeMobile = document.querySelector(".about-me-mobile");
		aboutMeMobile.classList.toggle("active");
	}
};

contactTile.onclick = function(e) {
	e.preventDefault();

	logoDesktop.classList.toggle("active");

	if (breakpoint.matches) {
		if (!squareFour.classList.contains("first-square")) {
			squareOne.classList.remove("first-square");
			squareTwo.classList.remove("first-square");
			squareThree.classList.remove("first-square");
			squareFour.classList.add("first-square");
		} else {
			squareFour.classList.remove("first-square");
		}

		contact.classList.toggle("active");

		this.classList.toggle("active2");
		allSquares.classList.toggle("active");
		squareTitleContact.classList.toggle("activeTitleContact");
		navbarContact.classList.toggle("active");

		squareOne.classList.toggle("active1");
		squareTwo.classList.toggle("active2");
		squareThree.classList.toggle("active3");
		squareFour.classList.toggle("active4");
	} else {
		console.log("test");
		let contactMobile = document.querySelector(".contact-mobile");
		contactMobile.classList.toggle("active");
	}
	
};

let icons = document.querySelectorAll(".icon");

for (var i = icons.length - 1; i >= 0; i--) {
	icons[i].addEventListener('mouseover', function() {
		TweenMax.to(".icons", 2, {x: 50});
	});
}

TweenMax.staggerFrom("#webdevshelly path", 2, {x: 50}, 0.1);

