// Ejercicio para solicitar a usuario un numero y el programa me regrese un triangulo con el numero de filas del numero//

// Solicitud de entrada a consola //

const readLine = require("readline-sync");

//Const para solicitar al usuario//

const altura = Number(readLine.question("Por favor introduce un numero: "));

// Creamos una variable que permita validar una entrada de numero correcta //

if (isNaN(altura) || altura < 0) {
    console.log("Por favor ingresa un numero valido");
} else {

    // Iniciamos un bucle para dibujar el triangulo //
    for (let i = 1; i <= altura; i++) {
        let fila = '';

        //Agregamos espacios para el triangulo//

        for (let j = 0; j < altura - i; j++) {
            fila += ' ';
        }
        // Agregamos los asteriscos //

        for (let k = 0; k < (2 * i - 1); k++) {
            fila += '*';
        }

        // Imprimimos el resultado//
        console.log(fila);

    }
}