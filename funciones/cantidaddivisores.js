/**
 * Dado un numero calcular la cantidad
 * de divisores del mismo. Ejemplo:
 * 10 -> 4 (1,2,5,10)
 * 20 -> 5 (1,2,4,5,10, 20)
 * 30 ->   (1,2,3,5,6,10,15, 30)
 */
function calcularCantidadDivisores(numero) {
    //Algoritmo
    //paso 1
    var sumDivisores = 0;
    //paso 2
    for (var contador = 1; contador <= numero; contador = contador + 1) {
        //paso 3
        if (numero % contador == 0) {
            sumDivisores = sumDivisores + 1;
        }
    }    
    //paso 4
    return sumDivisores;
}
console.log('Cantidad de numeros divisores del numero 10: ',calcularCantidadDivisores(10));
console.log('Cantidad de numeros divisores del numero 20: ',calcularCantidadDivisores(20));