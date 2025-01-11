// Ejercicio para calcular el radio de un circulo numero
const readLine = require("readline-sync");

// Se crea la entrada a consola con el usuario
const radio = Number(readLine.question("Introduce el radio: "));

// Se define una futcion que ejecute el calculo del radio
function calcularCircuferencia(radio) {

    // Validamos que la entrada sea un numero correcto
    if (isNaN(radio) || radio < 0) {
        console.log("Por favor introduce un numero valido y positivo");
        return;
    }

// Calculamos la circurferecia
const Longitud = 2*Math.PI*radio;
return Longitud;
}

// Llamamos a la funcion y devolvemos el resultado
const circuferencia = calcularCircuferencia(radio);


// Imprimimos por pantalla el resultado
console.log(`La circuferencia es: ${circuferencia}`);

