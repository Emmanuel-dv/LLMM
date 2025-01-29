const nombre = "exarion";

let nivel = 5;

let puntosVida = 100;

const armaPrincipal = "Espada del Destino";

let ArmaSecundaria = "Arco Simple";

let armadura = true;

console.log(`Nombre: ${nombre}\nNivel: ${nivel}\nPuntos de Vida: ${puntosVida}\nArma Principal: ${armaPrincipal}\nArma Secundaria: ${ArmaSecundaria}\nArmadura: ${armadura}`);

console.log("Estado del heroe despues de entrar en combate:\n")

nivel++;

puntosVida -= 30;

console.log(`Nombre: ${nombre}\nNivel: ${nivel}\nPuntos de Vida: ${puntosVida}\nArma Principal: ${armaPrincipal}\nArma Secundaria: ${ArmaSecundaria}\nArmadura: ${armadura}`);

let nivelCadena = nivel.toString();

let puntosFloat = parseFloat(puntosVida);

console.log(`Nivel Cadena: ${nivelCadena}\nPuntos Float: ${puntosFloat}`);

