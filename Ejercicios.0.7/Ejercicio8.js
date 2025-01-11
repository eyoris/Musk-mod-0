// Ejercicio que reciba un string y devuelva un palindromo
const readLine = require('readline-sync');

// Creamos la entrada para ingresar la palabra
const texto = readLine.question("Introduce un texto: ");

// Convertimos la entrada en minuscula y eliminamos espacios
const palabras = texto.toLowerCase().replace(/\s/g, '');

// Creamos la function que para validar texto o palabras
function palindromo(palabras) {

    //Revertimos la palabra
    palabrasInvertida = palabras.split('').reverse().join('');

    // Comparamos si su significado es el mismo
    if (palabras === palabrasInvertida) {
        console.log("Es un palindromo")
    } else {
        console.log("No es un palidronomo")
    }
}

// Llamamos a la function
const textos = palindromo(palabras);
