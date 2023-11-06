//funciones declarativas
function saludar() {
    //todas las lineas de codigo que quiero hacer para saludar
    document.write("<p>Hola mundo</p>");
};

function saludoNuevo(nombreIngresado, apellidoIngresado) {
    document.write(`<p>Hola ${nombreIngresado} ${apellidoIngresado}. Que tengas un buen día</p>`);
};

function sumar(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log(resultado);
    return resultado;
}




//invocar o llamar una función
saludar();

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoNuevo(nombre, apellido);
saludoNuevo('Peter', 'Parker');
saludoNuevo('Batman');

const valorResultante = sumar(30, 28);

document.write(`<p>El resultado de la suma es: ${valorResultante}</p>`)
document.write(`<p>El resultado de la suma es: ${sumar(20, 30)}</p>`)