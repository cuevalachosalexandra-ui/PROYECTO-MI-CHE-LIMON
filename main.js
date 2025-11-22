document.addEventListener("DOMContentLoaded", function() {

  // Carrusel
  var index = 0;
  var slides = document.getElementsByClassName("slide");

  function mostrarSlide(n) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    slides[n].classList.add("active");
  }

  var btnNext = document.getElementsByClassName("boton-next")[0];
  var btnPrev = document.getElementsByClassName("boton-prev")[0];

  btnNext.onclick = function() {
    index = index + 1;
    if (index >= slides.length) index = 0;
    mostrarSlide(index);
  };

  btnPrev.onclick = function() {
    index = index - 1;
    if (index < 0) index = slides.length - 1;
    mostrarSlide(index);
  };

  setInterval(function() {
    index = index + 1;
    if (index >= slides.length) index = 0;
    mostrarSlide(index);
  }, 3000);

  // Menú toggle
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !expanded);
  });

  // Modal
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("imagenAmpliada");
  var caption = document.getElementById("caption");
  var cerrar = document.getElementsByClassName("cerrar")[0];

  var imagenes = document.querySelectorAll(".galeria img");

  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      caption.innerHTML = this.alt;
    };
  }

  cerrar.onclick = function() {
    modal.style.display = "none";
  };

  modal.onclick = function(e) {
    if (e.target === modal) modal.style.display = "none";
  };

});


// obtener elementos
  var form = document.getElementById("contactForm");
  var mensaje = document.getElementById("successMessage");

  // cuando se envía el formulario
  form.onsubmit = function(e) {
    e.preventDefault(); // evitar que la página se recargue
    mensaje.style.display = "block"; // mostrar mensaje
    form.reset(); // limpiar formulario
  }
  // pedidos y reservas
  const form = document.querySelector(".pedido-form");
    const success = document.getElementById("pedidoSuccess");
    form.addEventListener("submit", e => {
      e.preventDefault();
      success.style.display = "block";
      form.reset();
    });


