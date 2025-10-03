document.addEventListener("DOMContentLoaded", function () {
  // Modal de imágenes
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const cerrar = document.querySelector(".cerrar");

  // Selecciona las imágenes dentro de las flip-cards
  const imagenes = document.querySelectorAll(".flip-card-back img");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  // Botón de cerrar
  if (cerrar) {
    cerrar.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Cerrar si haces clic fuera de la imagen (en el modal)
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Hamburger menu functionality
  const hamburgerMenu = document.querySelector('.menu-hamburguesa');
  const mainMenu = document.getElementById('mainMenu');

  if (hamburgerMenu && mainMenu) {
    hamburgerMenu.addEventListener('click', () => {
      mainMenu.classList.toggle('show');
    });
  }
});

