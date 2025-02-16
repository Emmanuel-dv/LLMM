const ejercicio1 = document.querySelector("#ejercicio1");

ejercicio1.addEventListener("mouseenter", () => {
    ejercicio1.style.color = cambiarColor();
});

function cambiarColor(){
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

const ejercicio2 = document.querySelector("#ejercicio2");

ejercicio2.addEventListener("mouseenter", cambiaImagen);

function cambiaImagen(){
    const nombreImagen = ejercicio2.src.split("/").pop();

    if (nombreImagen === "invisible.png"){
        ejercicio2.src = "assets/robotSalvaje.png";
    } else {
        ejercicio2.src = "assets/invisible.png";
    }
}

const ejercicio4 = document.querySelector("#ejercicio4");

ejercicio4.addEventListener("click", cambiaColores);

function cambiaColores(){
    const capas = document.querySelectorAll(".fondoNegro");

    capas.forEach(capa => {
        capa.classList.toggle("fondoRojo");
    });
}

const boton1 = document.querySelector(".boton1");
const capa = document.querySelector("#capaPrincipal");
const texto = capa.querySelector("p");

boton1.addEventListener("click", presionaBoton1);

function presionaBoton1() {
   
    // Restablecer todas las clases de fondo y texto
    capa.classList.remove("fondoBlanco", "fondoGris");
    capa.classList.add("fondoNegro");

    texto.classList.remove("letraNegra", "letraRoja");
    texto.classList.add("letraBlanca");
}

const boton2 = document.querySelector(".boton2");

boton2.addEventListener("click", presionaBoton2);

function presionaBoton2(){
  
    // Restablecer todas las clases de fondo y texto
    capa.classList.remove("fondoNegro", "fondoGris");
    capa.classList.add("fondoBlanco");

    texto.classList.remove("letraBlanca", "letraRoja");
    texto.classList.add("letraNegra");

}

const boton3 = document.querySelector(".boton3");

boton3.addEventListener("click", presionaBoton3);

function presionaBoton3(){

    // Restablecer todas las clases de fondo y texto
    capa.classList.remove("fondoNegro", "fondoBlanco");
    capa.classList.add("fondoGris");

    texto.classList.remove("letraBlanca", "letraNegra");
    texto.classList.add("letraRoja");
}
