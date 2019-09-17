/**
 * Determinar e impimir la cantidad de numeros primos
 * primos entre 3 y 100
 */
//                                numero = numero+1
for (var numero = 3; numero <= 100; numero++) {
    if (calcularCantidadDivisores(numero)== 2) {
        console.log(numero);        
    }

}

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