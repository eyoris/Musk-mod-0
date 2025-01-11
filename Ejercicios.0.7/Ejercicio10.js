const readLine = require('readline-sync');

// Función para crear y devolver la matriz original
function calcularMatriz() {
    // Creamos dos entradas donde le indicamos el número de filas y columnas
    const numeroFilas = Number(readLine.question('Introduce el número de filas de la Matriz: '));
    const numeroColumnas = Number(readLine.question('Introduce el número de columnas de la Matriz: '));

    // Creamos la matriz
    const matriz = [];
    let contador = 1; // Indicamos el contador

    for (let i = 0; i < numeroFilas; i++) {
        const fila = [];
        for (let j = 0; j < numeroColumnas; j++) {
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
    }

    // Imprimimos la matriz original
    console.log("Matriz Original:");
    matriz.map((array) => console.log(array));

    return matriz; // Devolvemos la matriz creada
}

// Función para calcular y devolver la matriz traspuesta
function calcularMatrizTraspuesta(matriz) {

    const filas = matrizOriginal.length;
    const columnas = matrizOriginal[0].length;

    // Creamos la matriz traspuesta
    const traspuesta = [];

    for (let j = 0; j < columnas; j++) {
        traspuesta[j] = []; // Inicializamos cada fila de la traspuesta
        for (let i = 0; i < filas; i++) {
            traspuesta[j][i] = matriz[i][j]; // Asignamos los valores traspuestos
        }
    }

    // Imprimimos la matriz traspuesta
    console.log("Matriz Traspuesta:");
    traspuesta.map((array) => console.log(array));
    
    return traspuesta; // Devolvemos la matriz traspuesta
}

// Llamamos a las funciones
const matrizOriginal = calcularMatriz();
const matrizTraspuesta = calcularMatrizTraspuesta(matrizOriginal);