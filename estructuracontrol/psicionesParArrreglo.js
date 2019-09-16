var nombres = [];
nombres.push("Erick", "Aleida", "Giovana", "Erlinda", "Roberto");
nombres.push("Ariel", "Juan", "Camila", "Ana", "Pablo", "Forest");

for (var contador = 0; contador < nombres.length; contador = contador +1) {
    if (contador%2==0) {
        console.log(nombres[contador]);        
    }
    
}