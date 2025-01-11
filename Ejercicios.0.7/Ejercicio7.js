// Funtcion para un texto que devuelva una matriz bidimensional
const readLine = require('readline-sync');

// Creamos la entrada del usuario
const texto = readLine.question("Por favor introduce texto: ");

// Dividimos en strig en palabras separadas
const palabra = texto.split(' ');

// Creamos la funtcion que nos calcule la matriz
function matrizBidimenti(palabra) {

    // Creamos una constante en para la matriz
    const matriz = [];
    // Adicionamos una variables para almacenar los valores de fila
    let fila = [];

    // Iniciamos un bucle que recorra los valores 
    for (let i = 0; i < palabra.length; i++) {
        const textos = palabra[i];
        fila.push(textos);//Agregamos la palabra a la fila
        if (fila.length === 5) {
            matriz.push(fila);
            fila = []; 
        }
    }
    // Si hay elemento restantes los agregamos a una fila
    if (fila.length > 0) {
        matriz.push(fila);
    }
    return matriz;
}

// Llamamos a la function
const calcularMatriz = matrizBidimenti(palabra);

// Imprimis por pantalla
console.log(calcularMatriz);



