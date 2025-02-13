// Espera a que todo el contenido se cargue
document.addEventListener("DOMContentLoaded", function() {
    // Asocia el evento 'click' al botón de sorpresa
    document.getElementById("btnSorpresa").addEventListener("click", mostrarSorpresa);
    
    // Crear elementos flotantes iniciales: 10 flores y 10 corazones
    crearElementos("flor", "flor", 10);
    crearElementos("corazon", "corazon", 10);
    
    // Crear 3 animales con imágenes diferentes
   /* const animalImages = [
      'https://cdn-icons-png.flaticon.com/128/616/616554.png', // Ej: pájaro
      'https://cdn-icons-png.flaticon.com/128/1998/1998627.png', // Ej: conejo
      'https://cdn-icons-png.flaticon.com/128/616/616430.png'   // Ej: perro
    ];*/
    
    animalImages.forEach(function(url) {
      let animal = document.createElement("div");
      animal.className = "animal";
      animal.style.top = Math.random() * 80 + "vh";
      animal.style.left = Math.random() * 100 + "vw";
      // Asigna la imagen como fondo
      animal.style.background = `url('${url}') no-repeat center/cover`;
      document.body.appendChild(animal);
    });
  });
  
  // Función que se ejecuta al pulsar el botón de sorpresa
  function mostrarSorpresa() {
    // Muestra el mensaje de felicitación
    document.getElementById("mensaje").style.display = "block";
    
    // Reproduce el sonido de felicitación
    let sonido = document.getElementById("sonidoSorpresa");
    sonido.play();

      // Reproduce la música de fondo si no se ha iniciado
  let musica = document.getElementById("musica");
  if (musica.paused) {
    musica.play().catch(error => {
      console.log("Error al reproducir la música: ", error);
    });
  }
    
    // Genera 15 flores y 15 corazones extra
    crearElementos("flor", "flor", 15);
    crearElementos("corazon", "corazon", 15);
    
    // Acelera el movimiento de todos los animales
    document.querySelectorAll(".animal").forEach(function(animal) {
      animal.classList.add("celebrando");
    });
  }
  
  // Función para crear elementos flotantes (flores o corazones)
  function crearElementos(tipo, clase, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      let elem = document.createElement("div");
      elem.className = clase;
      // Posición horizontal aleatoria
      elem.style.left = Math.random() * 100 + "vw";
      // Duración de la animación aleatoria entre 4 y 7 segundos
      elem.style.animationDuration = (Math.random() * 3 + 4) + "s";
      document.body.appendChild(elem);
    }
  }
  



