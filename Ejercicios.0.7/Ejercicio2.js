// Ejercicio sobre un programa que calcule el area de un circulo, pidiendole al usuario su radio
const readLine = require("readline-sync");

// Creamos la entrada del usuario
const radio = Number(readLine.question("Por favor introduce el radio: "));

// Creamos una funtcion que calcule el area del circulo
function calcularElArea(radio) {
    
    //Validamos la entrada del usuario
    if (isNaN(radio) || radio < 0) {
        console.log("Por favor introduce un numero valido o positivo ");
        return null;
    }

    // Calculamos el area del circulo
    const area = Math.PI*Math.pow(radio,2);
    return area;
}

// Llamamos a la funtcion y almancenamos el resultado
const areaCirculo = calcularElArea(radio);

// Imprimimos el resultado por pantalla
console.log(`El area del circulo es: ${areaCirculo}`);

