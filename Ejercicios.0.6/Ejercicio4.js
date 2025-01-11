// Ejercicio para calcular la tabla de multiplicar de un numero//

// Solicitud de entrada a la consola//
const readLine = require("readline-sync");

const numero = Number(readLine.question("Introduce un numero:"));

//Generamos la tabla de multiplicar//

console.log(`Tabla de multiplicar de ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
