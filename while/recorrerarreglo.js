/**
while(condicion){
    //mientras la condicion sea true
    //se seguira repitiendo las
    //insturcciones de este bloque
}
 */
/**
 * Recorrer un arreglo usando el ciclo while
 */
var nombres = ['Juan', 'Pedro', 'Camilo', 'Luis', 'Alvaro'];

var contador = 0;
//for (let index = 0; index < array.length; index++) {

while (contador < nombres.length) {
    console.log(nombres[contador]);
    contador = contador + 3;
}


