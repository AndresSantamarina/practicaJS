/*
while (condicion logica){
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}
*/
let numero = 1;
//document.write('<p>Renglón número ' +numero+'</p>');

while (numero <= 10) {
    document.write(`<p>Renglón número ${numero}</p>`);
    numero = numero + 1;
    //numero++; numero--; numero+=2; numero-=2;
};

/*
do{
    todas las lineas de codigo que quiero repetir varias veces
    agregar un codigo para que la condicion no se cumpla en algun momento
}
while(condicion logica)
*/
let contador = 10;

do{
    document.write(`<p>Renglón número ${contador} con do-while</p>`);
    contador--;
}
while(contador >= 1);

