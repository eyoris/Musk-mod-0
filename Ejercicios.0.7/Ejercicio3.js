// Ejercicio para implementar una funtcion que reciba el radio y pinte por pantalla la circuferencia y area
const readLine = require("readline-sync");

// Creamos la entrada del usuario
const radio = Number(readLine.question("Por favor introduce el area: "));

// Creamos la funtcion para calcular 
function calcularAreayCircuferencia(radio) {

    //Validamos la entrada del usuario
    if (isNaN(radio) || radio < 0) {
        console.log("Por favor introduce un nummero valido o positivo ");
        return null;
    }

  
    // Calculamos el area y la circuferencia
    const area = Math.PI*Math.pow(radio,2);
    const longitud = 2*Math.PI*radio;

  // Creamos un objeto que devuelva ambos resultados
    return {
        longitud: longitud,
        area: area,
    }
}

// Llamamos a la funtcion y almancenamos el resultado
const resultado = calcularAreayCircuferencia(radio);

// Imprimimos por pantalla el resultado
console.log(`La circurferencia es: ${resultado.longitud}`);
console.log(`El area del circulo es: ${resultado.area}`);

