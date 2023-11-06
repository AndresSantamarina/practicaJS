//funciones declarativas
function saludar() {
    //todas las lineas de codigo que quiero hacer para saludar
    document.write("<p>Hola mundo</p>");
};

function saludoNuevo(nombreIngresado, apellidoIngresado) {
    document.write(`<p>Hola ${nombreIngresado} ${apellidoIngresado}. Que tengas un buen día</p>`);
};


//invocar o llamar una función
saludar();

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoNuevo(nombre, apellido);
saludoNuevo('Peter', 'Parker');
saludoNuevo('Batman');

