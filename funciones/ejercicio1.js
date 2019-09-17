/**
 * Determinar e impimir la cantidad de numeros primos
 * primos entre 3 y 100
 */
//                                numero = numero+1
var contadorDeNumerosPrimos = 0;
for (var numero = 3; numero <= 100; numero++) {
    if (esPrimo(numero) == true) {
        console.log(numero);
        contadorDeNumerosPrimos++;
    }
}
console.log('La cantidad de numero primos del 3 al 100 es: ', contadorDeNumerosPrimos);


function esPrimo(num) {
    var cantDiv = 0;//cantidad de divisores
    for (var contador = 1; contador <= num; contador++) {
        if (num % contador == 0) {//Pregunta si es divisible?
            cantDiv = cantDiv + 1;
        }
    }
    var resultado = undefined;
    // si resultado es menor o igual a 2 es un numero 
    if (cantDiv == 2) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}