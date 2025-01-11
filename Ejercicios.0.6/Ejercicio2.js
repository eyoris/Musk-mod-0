// Ejercicio, programa para elegir 3 numeros, print si almenos alguno es par//

// Solicitud de entrada a la consola//
const readLine = require("readline-sync");
 
const num = Number(readLine.question("Introduce un numero:"));

const num2 = Number(readLine.question("Introduce un segundo numero:"));

const num3 = Number(readLine.question("Introduce un tercer numero:"));

// Creamos una Array que almacene todas las respuestas //

const numArray = [num,num2,num3]

// Creamos una variable para verificar si es numero par //

let hayNumeroPar= false;

for (let i = 0; i < numArray.length; i++) {
    const currentNum = numArray[i];
    if (currentNum % 2 === 0) {
        hayNumeroPar = true;
        break;
    }
 }
 
 // Imprimimos el resultado //

 if (hayNumeroPar) {
    console.log("Hay un numero par")
 } else {
    console.log("No hay ningun numero par")
 }
 

