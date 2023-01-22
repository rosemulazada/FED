/* Onderstaande hamburger menu code van: https://codepen.io/roza-m/pen/NWzQyyj */

var eersteImagesButton = document.querySelector(
  "header nav.images ul li:nth-of-type(2) "
);
console.log(eersteImagesButton);
// de button naar kliks later luisteren
// als er geklikt wordt, wordt de functie 'eersteImagesButtonKlik' uitgevoerd
eersteImagesButton.addEventListener("click", eersteImagesButtonKlik);

// de functie 'eersteImagesButtonKlik'
function eersteImagesButtonKlik() {
  // de class 'menuOpen' wordt aan de button toegevoegd
  // de class wordt weer verwijderd als een 2e keer geklikt wordt
  eersteImagesButton.classList.toggle("menuOpen");
  document
    .querySelector("header nav:nth-of-type(2) ul")
    .classList.toggle("dropdownOpen");
  document.querySelector("header nav:nth-of-type(2)").classList.toggle("whiteBg")
  document.querySelector("header nav:nth-of-type(3)").classList.toggle("whiteBg")
}

console.log(document.querySelector("details"));

var summary = document.querySelector(
  "header nav:nth-of-type(2) ul li:first-of-type details"
);
console.log(summary);
summary.addEventListener("click", summaryKlik);
function summaryKlik() {
  summary.classList.toggle("dropdownClosed");
}

// var summarySegundo = document.querySelector(
//   "header nav:nth-of-type(2) ul li:nth-of-type(3) details"
// );
var first = document.querySelector(
  "header nav:nth-of-type(2) ul li:nth-of-type(3) details"
);

var second = document.querySelector(
  "header nav:nth-of-type(2) ul li:nth-of-type(5) details"
);

var summaryTwo = document.querySelector(
  "header nav:nth-of-type(2) ul li:nth-of-type(3) details"
);
console.log(summaryTwo);
summaryTwo.addEventListener("click", summaryKlikTwo);
function summaryKlikTwo() {
  summaryTwo.classList.toggle("dropdownOpening");
}

var summaryThird = document.querySelector(
  "header nav:nth-of-type(2) ul li:nth-of-type(5) details"
);
console.log(summaryThird);
summaryThird.addEventListener("click", summaryKlikThird);
function summaryKlikThird() {
  summaryThird.classList.toggle("dropdownOpening");
}

var summaryFourth = document.querySelector(
  "header nav:nth-of-type(2) ul li:nth-of-type(7) details"
);
console.log(summaryFourth);
summaryFourth.addEventListener("click", summaryKlikFourth);
function summaryKlikFourth() {
  summaryFourth.classList.toggle("dropdownOpening");
}