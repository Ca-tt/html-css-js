window.onload = function () {
	/*** CONFIGURATION ***/
	let slides = {
		all: document.querySelectorAll(".slide"),
		active: document.querySelector(".slide.active"),
		count: document.querySelectorAll(".slide").length,
		activeWidth: document.querySelector(".slide.active").offsetWidth + "px",
		currentIndex: 0,
		nextIndex: 0,
	};

	let dots = {
		section: document.querySelector(".dots"),
		first: document.querySelector(".dot"),
		duplicates: "",
	};

	let arrows = {
		next: document.querySelector(".arrow.next"),
		prev: document.querySelector(".arrow.prev"),
	};

	let slideNumbers = {
		current: document.querySelector(".current-slide-number"),
		count: document.querySelector(".slides-count-number"),
	};
	/*** CONFIGURATION END ***/

	/*** SLIDER INITIALIZATION 
		1) Generate dots
		2) disable all slides and dots for the God's sake
		3) Set the first slide and dot active
		4) Enable arrows
	***/
	
	// P.S. Тут был крутой (и рабочий) код. 
	// Но Дамир(гад) вырезал и спрятал его под замком в своём Notion😈

	function disableSlides() {
		for (let i = 0; i < slides.count; i++) {
			slides.all[i].classList.remove("active");
			slides.all[i].classList.add("inactive");
		}
	}

	function disableDots() {
		for (let i = 0; i < dots.count; i++) {
			dots.all[i].classList.remove("active");
		}
	}

	// disable dots and slider
	// enable first slide and dot
	function sliderReset() {
		disableSlides();
		disableDots();

		slides.all[0].classList = "slide active";
		dots.first.classList.add("active");
	}
	sliderReset();

	// set number to current index + 1
	function setNumbers(currentSlideIndex) {
		slideNumbers.current.innerHTML = currentSlideIndex + 1;
		slideNumbers.count.innerHTML = slides.count;
	}
	setNumbers(slides.currentIndex);

	function enableArrows() {
		arrows.next.onclick = function () {
			changeSlide(1);
		};

		arrows.prev.onclick = function () {
			changeSlide(-1);
		};
	}
	enableArrows();
	/*** SLIDER INITIALIZATION END ***/

	/*** SLIDES CHANGE 
		1) Change slides based on next index arrows passed 
		OR based on current dot's index
		2) Check for slider's end while changing slides
		3) Update current slides text 
	***/
	function swapSlides(currentActive, nextActive) {
		currentActive.classList = "slide inactive";
		nextActive.classList = "slide active";
	}

	function swapDots(currentActiveDot, nextActiveDot) {
		currentActiveDot.classList.remove("active");
		nextActiveDot.classList.add("active");
	}

	function updateCurrentNumber(nextSlideIndex) {
		slideNumbers.current.innerHTML = nextSlideIndex + 1;
	}

	function checkForSliderEnd(nextSlide) {
		if (nextSlide > slides.count - 1) {
			nextSlide = 0;
		} else if (nextSlide < 0) {
			nextSlide = slides.count - 1;
		}
		return nextSlide;
	}

	/*** 
		1) Set current slide to next slide,
		2) Update nextSlide index,
		3) Check if next slide is not out of slide range
		4) Update dots and numbers
	***/

	function switchSlideIndexes(nextSlide) {
		slides.currentIndex = slides.nextIndex;
		slides.nextIndex += nextSlide;
	}

	function changeSlide(nextSlide) {
		// переключение
		switchSlideIndexes(nextSlide);

		// проверка, можно ли продолжать
		slides.nextIndex = checkForSliderEnd(slides.nextIndex);

		swapSlides(slides.all[slides.currentIndex], slides.all[slides.nextIndex]);
		swapDots(dots.all[slides.currentIndex], dots.all[slides.nextIndex]);
		updateCurrentNumber(slides.nextIndex);
	}

	function goToSlide(slideNumber) {
		disableDots();
		disableSlides();

		// на какой кружок нажали, тот и становится активным
		dots.all[slideNumber].classList = "dot active m-x-small";

		swapSlides(slides.all[slides.currentIndex], slides.all[slideNumber]);

		// приравниваю их значения, как при запуске слайдера
		// чтобы некст при нажатии на стрелочку посчитался правильно
		// текущий = следующий. А при нажатии следующий меняется
		slides.currentIndex = slideNumber;
		slides.nextIndex = slides.currentIndex;

		updateCurrentNumber(slides.nextIndex);
	}
};