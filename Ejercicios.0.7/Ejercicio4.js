// Ejercicio para implementar una funtcion que reciba por parametro un array y imprima por pantalla la suma y media arismetica 
const readLine = require('readline-sync');

// Creamos la entrada al usuario
const listaNumber = readLine.question("Introduce una lista de numeros separada por comas: ");

// Convertimos la entrada en un array separada por comas
const arrayNumber = listaNumber.split(",").map(Number);

// Validamos que todos los elementos del array sean numeros
for (let i = 0; i < arrayNumber.length; i++) {
    if (isNaN(arrayNumber[i])) {
    console.log("El array contiene valores que no son numericos");
    return;
    }
}

// Creamos una funtcion que calcule la suma y media sobre los elementos del array
function calcularSumaMedia(arrayNumber) {

    // Ejecutamos un bucle que nos sume todos los elementos del array 
    let suma = 0;

    for (let i = 0; i < arrayNumber.length; i++){
    suma += arrayNumber[i];
    } 

    // Calculamos la media
    const media = suma / arrayNumber.length;
    
    //Creamos un objeto que devuelva ambos resultados
    return {
        suma: suma,
        media: media,
    }
}

//Llamamos a la funtcion y almacenamos resultado
const sumaArray = calcularSumaMedia(arrayNumber);

// Imprimimos por pantalla el resultado
console.log(arrayNumber);
console.log(`La suma es ${sumaArray.suma}`);
console.log(`La media es ${sumaArray.media}`);






