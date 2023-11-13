// notacion literal, cuando necesito un objeto
const usuario = {
    //propiedades clave: valor
    nombre: 'Thiago',
    apellido: 'Fiol',
    edad: 14,
    correo: 'thiago@gmail.com',
    password: '1235Ab@',
    //metodos
    login: function(){
        document.write(`<p>El usuario inició sesión</p>`);
    },
    logout: () =>{
        document.write(`<p>El usuario cerró sesión</p>`);
    }
}

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
//console.log(usuario);

//cuidado con las propiedades mal escritas o que no existan, se diferencia entre mayusculas y minusculas
document.write(`<p>Tel: ${usuario.tel}</p>`);
