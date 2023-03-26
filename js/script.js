var slides = [];
var slideIndex = 0;

function loadSlides() {
	for (var i = 1; i <= 5; i++) {
		var img = new Image();
		img.src = "slides/" + i + ".png";
		slides.push(img);
	}
}

// Muestra la siguiente diapositiva
function nextSlide() {
	slideIndex++;
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	showSlide();
}

// Muestra la diapositiva actual
function showSlide() {
	var slideContainer = document.getElementById("slideshow");
	slideContainer.innerHTML = "";
	slideContainer.appendChild(slides[slideIndex]);
}

// Carga las imágenes y comienza la presentación de diapositivas
loadSlides();
showSlide();
setInterval(nextSlide, 5000);