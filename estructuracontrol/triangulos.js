var ladoA = 3;
var ladoB = 7;
var ladoC = 9;
/**
 * Dado los lados A,B,C de un triangulo
 * diga si es escaleno, equilatero, isosceles.
 */

var testEquilater = (ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC) 

//console.log(testEquilater);


//ladoA != ladoB != ladoC

var testEscaleno =   (ladoA != ladoB) && (ladoA != ladoC) && (ladoB != ladoC);
console.log(testEscaleno);
