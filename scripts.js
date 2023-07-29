document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector(".hero");
    const colors = ["#343a40", "#495057", "#6c757d", "#adb5bd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    heroSection.style.backgroundColor = randomColor;
  });
  
  
  function mostrarMensaje() {
    alert("¡Gracias por visitar Cervecería El Buen Sabor!");
  }
  

  