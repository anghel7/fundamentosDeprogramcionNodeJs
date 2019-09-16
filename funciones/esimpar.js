// Una funcion tiene un nombre
// Parametros en entrada (>= 0) -> datos para la funcion
// Cuerpo de la funcion
// Parametro de retorno (1  u 0)
// Operadores logicos
// Operadores Aritmeticos
function esImpar(numero) {
    var resultado;
    if (numero % 2 != 0) {
        //console.log('El numero es impar');
        resultado = true;

    } else {
        //console.log('El numero es par');
        resultado = false;
    }
    return resultado;
}
//push(3), push(6,4,8,9)

console.log('el numero 5 es impar?: ',esImpar(5));
console.log(esImpar(6));
console.log(esImpar(7));
console.log(esImpar(8));
console.log(esImpar(9));
console.log(esImpar(10));

//esImpar(4)