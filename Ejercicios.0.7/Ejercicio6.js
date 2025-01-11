// Ejercicio para crear una Matriz que reciba un Numero y devuelva una matriz n^2
const readLine = require("readline-sync");

// Creamos la entrada
const numero = Number(readLine.question("Introduce un numero: "));

// Creamos una funtcion para ejecutar la matriz
function calcularMatriz(numero) {

    // Creamos una constante que almacene el resultado
const matriz = [];

//Creamos un for para agregar las filas y los valores de las filas
let contador = 1;

for (let i = 0; i < numero; i++) {
    const fila = [];
    for (let j = 0; j < numero; j++) {
        fila.push(contador);
        contador++;
    }
    matriz.push(fila);
}
matriz.map((array) => console.log(array))
}

// Creamos una constante para llamar ala funtcion
const matrizCuadrada = calcularMatriz(numero);

