// script.js

// Hamburguesa
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// AOS Init
AOS.init();

// Preguntas frecuentes
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-question");

  faqs.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const answer = btn.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const words = ["Multiagente", "de automatización", "De centralización", "de gestión"];
  let currentWordIndex = 0;
  const rotatingWordElement = document.querySelector(".rotating-word");

  function changeWord() {
    rotatingWordElement.textContent = words[currentWordIndex];
    rotatingWordElement.style.animation = "none";
    void rotatingWordElement.offsetWidth; // Reinicia la animación
    rotatingWordElement.style.animation = null;
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  rotatingWordElement.addEventListener("animationend", changeWord);
  changeWord(); // Inicializa la primera palabra
});
