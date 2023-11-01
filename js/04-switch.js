// si el usuario presiona 1 consulta el saldo, 2 extraer dinero, 3 ingresar dinero

let saldo = 1000;
// const opcion = parseInt(prompt("Seleccione una opción: 1- Consultar el saldo, 2- extraer dinero, 3- ingresar dinero"));

// if (opcion === 1) {
//     document.write(`Su saldo es de $${saldo}`)
//     console.log("debo mostrar el saldo");
// } else if (opcion === 2) {
//     const extraccion = parseFloat(prompt("Ingrese el monto a retirar"))
//     if (extraccion > 0 && extraccion <= saldo) {
//         saldo = saldo - extraccion;
//         document.write(`Su saldo es de $${saldo}`)
//         console.log("extraer el dinero");
//     } else {
//         alert(`Ingrese un monto válido`)
//     }
// } else if (opcion === 3) {
//     const ingreso = parseFloat(prompt("Ingrese el monto a depositar"))
//     if (ingreso > 0) {
//         saldo = saldo + ingreso;
//         document.write(`Su saldo es de $${saldo}`)
//         console.log("ingresar dinero");
//     } else {
//         alert("Ingrese un monto válido")
//     }
// } else {
//     alert("Ingresó una opción inválida")
//     console.log("ingresó una opción inválida");
// }

// switch (opcion) {
//     case 1:
//         document.write(`Su saldo es de $${saldo}`);
//         console.log("debo mostrar el saldo");
//         break;
//     case 2:
//         const extraccion = parseFloat(prompt("Ingrese el monto a retirar"))
//         if (extraccion > 0 && extraccion <= saldo) {
//             saldo = saldo - extraccion;
//             document.write(`Su saldo es de $${saldo}`);
//             console.log("extraer el dinero");
//         } else {
//             alert(`Ingrese un monto válido`);
//         }
//         break;
//     case 3:
//         const ingreso = parseFloat(prompt("Ingrese el monto a depositar"))
//         if (ingreso > 0) {
//             saldo = saldo + ingreso;
//             document.write(`Su saldo es de $${saldo}`);
//             console.log("ingresar dinero");
//         } else {
//             alert("Ingrese un monto válido");
//         }
//         break;
//     default:
//         alert("Ingresó una opción inválida")
//         console.log("ingresó una opción inválida");
// }

do {
    const opcion = parseInt(prompt("Seleccione una opción: 1- Consultar el saldo, 2- extraer dinero, 3- ingresar dinero"));
    switch (opcion) {
        case 1:
            document.write(`Su saldo es de $${saldo}`);
            console.log("debo mostrar el saldo");
            break;
        case 2:
            const extraccion = parseFloat(prompt("Ingrese el monto a retirar"))
            if (extraccion > 0 && extraccion <= saldo) {
                saldo = saldo - extraccion;
                document.write(`Su saldo es de $${saldo}`);
                console.log("extraer el dinero");
            } else {
                alert(`Ingrese un monto válido`);
            }
            break;
        case 3:
            const ingreso = parseFloat(prompt("Ingrese el monto a depositar"))
            if (ingreso > 0) {
                saldo = saldo + ingreso;
                document.write(`Su saldo es de $${saldo}`);
                console.log("ingresar dinero");
            } else {
                alert("Ingrese un monto válido");
            }
            break;
        default:
            alert("Ingresó una opción inválida")
            console.log("ingresó una opción inválida");
    }
} while (confirm("¿Desea realizar otra operación?"));