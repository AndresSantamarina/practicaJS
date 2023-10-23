/* Esto es un comentario
de multiples
lineas
 */

// Esto es un comentario de una unica linea

// declarar una variable (var - let - const)

let anioActual = 2023;
const url = 'https://universe.rollingcodeschool.com';

// mostrar mensajes
console.log(anioActual);
console.log('anioActual');
console.log("Año actual: " + anioActual);
console.log(`Año actual: ${anioActual}`);

// modificar el valor de una variable
anioActual = 2023 + 1;
console.log("Año actual: " + anioActual);
console.log(url);

document.write('<h1 class="titulo">Hola mundo '+anioActual+'</h1>');
document.write('hola mundo <br>');
document.write('hola mundo');

// ventana emergente
alert('Esto es un ejemplo de una alerta');

// Solicitar un numero al usuario y luego sumarle 5, por ultimo mostrar el resultado de la suma
const numeroSolicitado = parseInt(prompt('Ingrese un numero del 1 al 100'));

console.log(numeroSolicitado);
console.log("Resultado: " + (numeroSolicitado + 5));
console.log(numeroSolicitado + 5);

// transformar o parsear un numero de string a formato numerico
// parseInt("100")
// parseFloat("100.50")

