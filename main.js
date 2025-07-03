document.addEventListener("DOMContentLoaded", () => {
  const opiniones = [
  {
    foto: "imagenesTF/fotocomentario.jpg",
    estrellas: "★★★★★",
    comentario: "Excelente servicio, las notificaciones llegaron justo a tiempo."
  },
  {
    foto: "imagenesTF/fotocomentario2.jpg",
    estrellas: "★★★★☆",
    comentario: "Muy útil para estar al tanto de los incendios en mi zona."
  },
  {
    foto: "imagenesTF/fotocomentario3.jpg",
    estrellas: "★★★☆☆",
    comentario: "El sistema funciona, pero me gustaría más personalización."
  }
];

let indice = 0;

function mostrarOpinion(index) {
  const foto = document.getElementById("clienteFoto");
  const estrellas = document.getElementById("clienteEstrellas");
  const comentario = document.getElementById("clienteComentario");

  foto.style.backgroundImage = `url(${opiniones[index].foto})`;
  estrellas.textContent = opiniones[index].estrellas;
  comentario.textContent = opiniones[index].comentario;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  indice = (indice - 1 + opiniones.length) % opiniones.length;
  mostrarOpinion(indice);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  indice = (indice + 1) % opiniones.length;
  mostrarOpinion(indice);
});

// Inicializa con la primera opinión
mostrarOpinion(indice);

  // Registro
  const formulario = document.getElementById("formularioRegistro");
  const mensaje = document.getElementById("mensajeExito");

  if (formulario) {
    formulario.addEventListener("submit", function(e) {
      e.preventDefault(); // Evita que se envíe el formulario
      mensaje.style.display = "block"; // Muestra mensaje
      this.reset(); // Limpia el formulario

      // Oculta el mensaje luego de 5 segundos
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 5000);
    });
  }


});

const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

document.querySelector('.login-btn').onclick = () => {
  window.location.href = 'login.html';
};

function solicitarServicio(nombreServicio) {
  alert(`Has solicitado el servicio de: ${nombreServicio}`);
}

