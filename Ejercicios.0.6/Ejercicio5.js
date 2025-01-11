// Ejercicio para contar el numero de vocales en una palabra //

// Solicitud de entrada a la consola//
const readLine = require("readline-sync");

const pregunta = readLine.question("Por favor escriba una palabra:");

// Creamos un array que contenga las vocales//

const vocales = ["a","e","i","o","u"];

let contador = 0;

// Definimos para que tome las letras mayusculas y minusculas //

const palabra = pregunta.toLowerCase();

// Creamos un bucle para recorrer la palabra//

for(let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
        contador++;
    }
}

// Creamos una constate para extraer el resultado//

const resultado = contador;

console.log(`Numero de vocales: ${resultado}`);


