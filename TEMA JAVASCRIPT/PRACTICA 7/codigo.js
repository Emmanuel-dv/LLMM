const b = document.querySelector("#boton");
b.addEventListener("click", mostrarPersonaje);

async function mostrarPersonaje(){
    const personaje = document.querySelector(".personaje").value;
    const enlace = `https://rickandmortyapi.com/api/character/${personaje}`;


    const nombreCelda = document.querySelector(".nombre");
    const especieCelda = document.querySelector(".especie");
    const generoCelda = document.querySelector(".genero");
    const imagenCelda = document.querySelector(".imagen");
    const aparicionesCelda = document.querySelector(".apariciones");

    try{
    
        const respuesta = await fetch(enlace);
        const datos = await respuesta.json();

        nombreCelda.textContent = datos.name;
        especieCelda.textContent = datos.species; 
        generoCelda.textContent = datos.gender; 
        imagenCelda.innerHTML = `<img src="${datos.image}" alt="${datos.name}">`; 
        aparicionesCelda.textContent = (datos.episode).length; 

        generoCelda.classList.remove("fondoRojo", "fondoAzul", "fondoVerde", "fondoGris");

        switch (datos.gender) {
            case "Female":
                generoCelda.classList.add("fondoRojo");
                break;
            case "Male":
                generoCelda.classList.add("fondoAzul");
            default:
                generoCelda.classList.add("fondoGris");
        }
    } catch (error) {
        tituloCelda.textContent = "";
        anyoCelda.innerHTML = "";
        duracionCelda.textContent = "";
        console.error("Error al obtener datos", error);
    }

}