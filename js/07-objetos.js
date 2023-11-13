// notacion literal, cuando necesito un objeto
const usuario = {
    //propiedades clave: valor
    nombre: 'Thiago',
    apellido: 'Fiol',
    edad: 14,
    correo: 'thiago@gmail.com',
    password: '1235Ab@',
    //metodos
    //si tengo que acceder a una propiedad interna, es mejor usar una funcion declarativa y no flecha
    login: function(){
        console.log(this);
        document.write(`<p>El usuario ${this.nombre} inició sesión</p>`);
    },
    logout: () =>{
        //el this en la funcion flecha me devuelve el objeto del navegador
        console.log(this);
        document.write(`<p>El usuario cerró sesión</p>`);
    }
}
//depende de en donde invoque a this, me devuelve un objeto. Acá me devuelve el objeto del navegador
console.log(this);

//mostrar un objeto
console.log(usuario);
document.write(usuario);
document.write(`<h1>Usuario: ${usuario.nombre} ${usuario.apellido}</h1>`);
document.write(`<p>Correo: ${usuario['correo']}</p>`);

//modificar la propiedad de un objeto
usuario.edad++;
document.write(`<p>Edad: ${usuario.edad}</p>`);

//agregar una propiedad al objeto
usuario.perfil = 'alguna foto';
document.write(`<p>Perfil: ${usuario.perfil}</p>`);
console.log(usuario);

//cuidado con las propiedades mal escritas o que no existan, se diferencia entre mayusculas y minusculas
document.write(`<p>Tel: ${usuario.tel}</p>`);

//borrar una propiedad de un objeto
delete usuario.perfil;
console.log(usuario);

//metodo para saber si mi objeto tiene una propiedad, devuelve un booleano
console.log(usuario.hasOwnProperty('edad'));

//invocar un metodo del objeto
usuario.login();
usuario.logout();
