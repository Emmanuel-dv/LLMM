const b = document.querySelector("#boton");
b.addEventListener("click", buscarPelicula);

async function buscarPelicula(){
    const nombrePelicula = document.querySelector("#nombrePelicula").value;

    const enlace = `http://www.omdbapi.com/?t=${nombrePelicula}&apikey=6bd47da3`;


    const tituloCelda = document.querySelector(".titulo");
    const anyoCelda = document.querySelector(".anyo");
    const duracionCelda = document.querySelector(".duracion");

    try{
    
        const respuesta = await fetch(enlace);
        const datos = await respuesta.json();

        tituloCelda.textContent = datos.Title; 

        anyoCelda.textContent = datos.Year;

        duracionCelda.textContent = datos.Runtime;

    } catch (error) {
        tituloCelda.textContent = "";
        anyoCelda.innerHTML = "";
        duracionCelda.textContent = "";
        console.error("Error al obtener datos", error);
    }

}