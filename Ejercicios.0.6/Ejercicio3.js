// Ejercicio para calcular el factorial de un numero//

// Solicitud de entrada a la consola//
const readLine = require("readline-sync");

const numero = Number(readLine.question("Introduce un numero para calcular su factorial:"));

// Ejecutamos una verificacion para numeros negativos//

if (numero < 0) {
    console.log("El factorial no esta definido para numeros negativos")
} else {

let resultado = 1;

for (let i = 2; i <= numero; i++) {
    resultado *= i;
} 

console.log (`El factoria de ${numero} es ${resultado}`);

}





