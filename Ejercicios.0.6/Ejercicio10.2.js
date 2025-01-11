// Ejercicio para que el usuario adivine un numero del 1 al 10//

// Solicitud de entrada a la consola// 

const readLine = require("readline-sync");

// Para generar numero aleatorio //

const randomNumber = Math.floor(Math.random()*10)+1;

// Contador de intentos //

let contadorIntentos = 0;
let adivinado = false;

// Iniciamos bucle que finaliza hasta adivinar el numero //

do {
    const adivina = Number(readLine.question("He pensado en un numero del 1 al 10, intenta adivinarlo! "));
    contadorIntentos++

    if (isNaN(adivina) || adivina < 1 || adivina > 10) {
        console.log("Por favor ingrese un numero valido del 1 al 10");
    
    } else if (adivina === randomNumber) {
        console.log(`Correcto, el numero aleatorio es ${randomNumber}.`);
        console.log(`Numero de intentos: ${contadorIntentos}`);
        adivinado = true;
    } else {
        console.log("Intenta de nuevo");
    }
} while (!adivinado);