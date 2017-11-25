
var modal = document.getElementById("myModal")
var close = document.getElementById("close");
var container = document.getElementById("container");
var slideIndex = 1;

function openModal() {
modal.classList.add("modal-open");
container.style.position = "fixed";
}

function closeModal() {
modal.classList.remove("modal-open");
container.style.position = "initial";
}


window.onclick = function (event) {
	if (event.target == modal) {
		closeModal();
	}
}

close.addEventListener("click", closeModal);


showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.addEventListener("keydown",(event) => {
	if (event.keyCode == 39) {
  plusSlides(1);
};
});
window.addEventListener("keydown",(event) => {
	if (event.keyCode == 37) {
  plusSlides(-1);
};
});
