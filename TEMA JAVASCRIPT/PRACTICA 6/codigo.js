const b = document.querySelector("#boton");
b.addEventListener("click", buscarPokemon);

async function buscarPokemon() {
    const nombrePokemon = document.querySelector("#nombrePokemon").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    
    const nombreCelda = document.querySelector(".nombre");
    const imagenCelda = document.querySelector(".imagen");
    const alturaCelda = document.querySelector(".altura");
    const tipoCelda = document.querySelector(".tipos ul");

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        
        nombreCelda.textContent = data.name;

        
        imagenCelda.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;

        
        alturaCelda.textContent = data.height;

        
        tipoCelda.innerHTML = "";

        
        data.types.forEach(element => {
            tipoCelda.innerHTML += `<li>${element.type.name}</li>`;
        });
    } catch (error) {
        // Limpiamos la tabla en caso de error
        nombreCelda.textContent = "";
        imagenCelda.innerHTML = "";
        alturaCelda.textContent = "";
        tipoCelda.innerHTML = "";
        console.error("Error al obtener datos", error);
    }
}
























