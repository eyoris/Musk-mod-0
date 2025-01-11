// Ejercicio, print pantalla si es numero par o impar, si es positivo o negativo. If no es un num print "no es un numero"//

// Funcion para introducir datos//

const readLine = require("readline-sync");

const input = readLine.question("Introduce un numero:");

const num = parseInt(input);
if (isNaN(num)) {
    console.log("No es un numero");
}   else {
    console.log ("El numero es:", num);
} 

//Convertimos la entrada en numero//

const numero = Number(input);

//Verificamos si el numero es negativo o positivo//
if (numero>0) {
    console.log(`${numero} El numero es positivo`);
}
else if (numero<0) {
    console.log(`${numero} El numero es negativo`);
}
else {
    console.log("El numero es cero")
}

//Verificamos si el numero es par o impar//
if (numero % 2 === 0) {
    console.log (`${numero} El numero es par`);
}
else {
    console.log ("El numero es impar");
}


