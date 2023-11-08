// declarar un array
const productos = [];

const juegos = ['counter-strike', 'Minecraft', 2023, true, 'valorant', 'half-life', 'lol'];

function mostrarJuegos(titulo) {
    document.write(`<h2>${titulo} (${juegos.length})</h2>`);
    document.write(`<ul>`);
    for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
        document.write(`<li>${juegos[indiceJuego]}</li>`);
    }
    document.write(`</ul>`);
}

const mostrarArray = (arreglo, titulo) => {
    document.write(`<h2>${titulo}</h2>`);
    document.write(`<ul>`);
    // for (let i = 0; i < juegos.length; i++) {
    //     document.write(`<li>${juegos[i]}</li>`);
    // }
    arreglo.map((item)=> document.write(`<li>${item}</li>`));
    document.write(`</ul>`);
}

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
mostrarJuegos('Lista de juegos + 2 juegos extras');
// document.write(`<h2>Lista de juegos + 2 juegos extras</h2>`);
// document.write(`<ul>`);
// for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
//     document.write(`<li>${juegos[indiceJuego]}</li>`);
// }
// document.write(`</ul>`);

// console.log(juegos.length);
// console.log(juegos);

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

//eliminar elementos del array --- shift elimina, unshift agrega, todo al principio

juegos.shift();

document.write(`<h2>Lista de juegos - 1 elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

juegos.splice(3, 1);
//juegos.splice(3,3) elimina 3 elementos desde la tercera posicion
//juegos.splice(3) elimina todo desde la tercera posicion
//juegos.splice(0) elimina todo

document.write(`<h2>Lista de juegos - 1 elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

//para eliminar el ultimo elemento del array
juegos.pop();

document.write(`<h2>Lista de juegos - 1 elemento del array (${juegos.length})</h2>`);
document.write(`<ul>`);
for (let indiceJuego = 0; indiceJuego < juegos.length; indiceJuego++) {
    document.write(`<li>${juegos[indiceJuego]}</li>`);
}
document.write(`</ul>`);

mostrarJuegos('Lista de juegos mostrada a través de una función');

juegos.push('Mortal Kombat 1', 'Mortal Kombat 2', 'Mortal Kombat 3', 'Mortal Kombat 1');
mostrarJuegos('Agregamos nuevos jueguitos');

console.log(juegos[8]);
console.log(juegos[8].includes('Kombat')); //devuelve true o false

//const juegosMKT = juegos.filter((juego)=> condicion logica );
//const juegosMKT = juegos.filter((juego)=> juego === 'Mortal Kombat 1'); //filter usa una funcion anonima, si uso llaves {} tengo que poner return, que se omite al no usar las llaves
const juegosMKT = juegos.filter((juego)=> juego.includes('Mortal Kombat'));
console.log(juegosMKT);

mostrarArray(juegosMKT, 'Familia de juegos de Mortal Kombat');