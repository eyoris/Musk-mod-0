// Ejercicio para solicitar al usuario 2 numeros (base y altura de un rectangulo) y se debera pintar con asteriscos//

// Solicitud de entrada a la consola //

const readLine = require("readline-sync");

// Const para solicitar al usuario altura y anchura //

const altura =  Number(readLine.question("Favor indica la altura: "));

const ancho = Number(readLine.question("Favor indica la anchura: "));

// Validamos la entrada //

if (isNaN(altura) || altura < 0 || isNaN(ancho) || ancho < 0) {
    console.log("Por favor ingresa numeros validos o mayor a 0");
} else {

    // Ejecutamos un bucle para dibujar el rectangulo//
    for (let i = 0; i < altura; i++) {
        let fila = '';

        // Agregamos asteriscos por columna //
        for (let j = 0; j < ancho; j++) {
            fila += '*';
        }

        // Imprimimos por pantalla //
        console.log(fila);
    }
}