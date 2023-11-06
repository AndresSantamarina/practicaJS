// declarar un array
const productos = [];

const juegos = ['counter-strike', 'Minecraft', 2023, true, 'valorant', 'half-life', 'lol'];

//mostrar un array
console.log(juegos.length);
console.log(juegos);
document.write(juegos);

//mostrar un solo elemento
document.write(`<p>El primer juego es ${juegos[0]}</p>`);
//por si no me acuerdo cuál es el último elemento
document.write(`<p>El último juego es ${juegos[juegos.length - 1]}</p>`);
//si pido una posición que no existe, me devuelve undefined, porque el array puede seguir creciendo
document.write(`<p>Juego de la posición 20 ${juegos[20]}</p>`);

document.write(`<h2>Lista de juegos</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

//agregar elementos al principio del array
juegos.unshift('God of War', 'Street Fighter');
document.write(`<h2>Lista de juegos + 2 juegos extras</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

console.log(juegos.length);
console.log(juegos);

//agregar elementos en el medio
juegos.splice(6, 0, 'Dark Souls');
document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

console.log(juegos.length);
console.log(juegos);

//agregar elementos al final
juegos.push('Mortal Kombat');
document.write(`<h2>Lista de juegos + 1, cantidad total (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

console.log(juegos.length);
console.log(juegos);

// modificamos los elementos de un array
juegos[5] = 'Stardew valley';

document.write(`<h2>Lista de juegos, modificamos un elemnto del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);