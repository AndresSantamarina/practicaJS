// si el usuario presiona 1 consulta el saldo, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;
const opcion = parseInt(prompt("Seleccione una opción: 1- Consultar el saldo, 2- extraer dinero, 3- ingresar dinero"));

if (opcion === 1){
    console.log("debo msotrar el saldo");
}else if(opcion === 2){
    console.log("extraer el dinero");
}else if (opcion === 3){
    console.log("ingresar dinero");
}else{
    console.log("ingresó una opción inválida");
}
