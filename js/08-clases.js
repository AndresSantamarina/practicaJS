// averiguar en que version del ECMAScript se agrego la sintaxis de clases
//prototipos con sintaxis de clases, que nos garantizan la herencia
//en la parte del constructor pido los parametros, que pueden o no tener los mismos nombres que las propiedades.
//anioLanzamiento, desarrollador, 
class VideoJuego{
    #etiquetas;//propiedad privada
    constructor(titulo, genero, precio, etiquetas, anioLanzamiento, desarrollador){
        //declaramos las propiedades que tendra un videojuego
        //this.nombreDeLaPropiedad = parametro;
        this._titulo = titulo;
        this.genero = genero;
        this._precio = precio;
        this.#etiquetas = etiquetas;
        this.anioLanzamiento = anioLanzamiento;
        this.desarrollador = desarrollador;
        //propiedad por defecto
        this.publicado = false;
    }
    //propiedades computadas get y set
    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }

    set titulo(nuevoTitulo){
        if (nuevoTitulo !== ''){
            this._titulo = nuevoTitulo;
        }else{
            alert('Debe ingresar un nuevo título');
        }
    }

    //aqui declaro mis metodos
    mostrarDatos(){
        document.write(`<ul>
        <li>Título: ${this.titulo}</li>
        <li>Precio: $${this.precio}USD</li>
        <li>Género: ${this.genero}</li>
        <li>Desarrollador: ${this.desarrollador}</li>
        </ul>`)
    }
}

//crear o instanciar un objeto

const minecraft = new VideoJuego('Minecraft','Sandbox',30,['cubitos','granja','mundo abierto', 'creeper'], 2008,'Mojang');

minecraft.mostrarDatos();

document.write(`<p>Título del juego: ${minecraft.titulo}, precio: ${minecraft.precio} USD</p>`);
document.write(`<p>Etiquetas: ${minecraft.etiquetas}</p>`);