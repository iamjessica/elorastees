// var myModal = document.getElementById("myModal");
// var image = document.querySelectorAll(".gallery-image");
// var slide = document.querySelectorAll(".slide");
//
// const openModal = () => {
// 	myModal.classList.add
// 	("modalOpen");
// };
//
// //add click event to gallery images
// for(i = 0; 0 < image.length; i++) {
// 	image[i].addEventListener("click", openModal);
// }
//
// //close the modal
// const closeModal = () => {
// 	myModal.classList.remove("modalOpen");
// };
// window.addEventListener("keydown",(event) => {
// 	if (event.keyCode == 27) {
//   closeModal();
// };
// });
//
//
// var close = document.getElementById("close")
// close.addEventListener(click, closeModal);
//
//
// const showSlide = () => {
//
// }
//
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
// };
//   // slide[0].style.display = "block"


var modal = document.getElementById("myModal")
var close = document.getElementById("close");
var container = document.getElementById("container");
var slideIndex = 1;

function openModal() {
modal.classList.add("modal-open");
container.classList.add("no-scroll");
}

function closeModal() {
modal.classList.remove("modal-open");
container.classList.remove("no-scroll");
}

close.addEventListener("click", closeModal);

window.addEventListener("keydown",(event) => {
	if (event.keyCode == 27) {
  closeModal();
};
});

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
