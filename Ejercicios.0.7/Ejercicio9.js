// Función que reciba un número y devuelva una matriz cuadrada
const readLine = require("readline-sync");

// Creamos la entrada
const tamano = Number(readLine.question('Introduce el tamano de la matriz: '));

// Creamos la funtcion que calcule la matriz
function calcularMatriz(tamano) {

// Validamos que la entrada sea un numero
    if (isNaN(tamano) || tamano < 0 ) {
    console.log("Por favor introduce un numero valido y positivo");
    return null;
    }

    // Creamos una matriz
    let Matriz = [];

    //Recorremos el tamano y agregamos las filas y columnas
    for (let i = 0; i < tamano; i++) {
        const fila = [];
        for ( let j = 0; j < tamano; j++) {
          fila.push(i * j);
    } 
    Matriz.push(fila);
    } 
    Matriz.map((array) => console.log(array))
}

// Llamamos la funtcion
const MatrizCuadrada = calcularMatriz(tamano);





