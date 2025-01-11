// Ejercicio para pedir a usuario year e imprimir por pantalla si es bisiesto o no//

// Solicitud de entrada a consola//

const readLine = require("readline-sync");

const years = Number(readLine.question("Por favor introduce un year: "));

// Creamos una variable para validar year bisiesto, anres de ejecutar la instruccion posterior //

let esBisiesto = false;

    if ((years % 4 == 0 && years % 100 !== 0) || (years % 400 === 0)) {
        esBisiesto = true;
    }   

// Para mostrar resultado//

if (esBisiesto) {
    console.log(`${years} es bisiesto`);
} else {
    console.log(`${years} no es bisiesto`);
}

