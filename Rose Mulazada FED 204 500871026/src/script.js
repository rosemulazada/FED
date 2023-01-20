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
  eersteImagesButton.classList.add("menuOpen");
}
