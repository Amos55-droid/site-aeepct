// Fonction pour le menu latéral
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
}

// Fonction pour afficher les images du diaporama automatiquement
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change toutes les 3 secondes
}

// Lancer le diaporama et autres scripts une fois la page chargée
document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});