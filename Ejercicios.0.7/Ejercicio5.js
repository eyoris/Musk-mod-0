// Ejercicio para implementar una funtcion que reciba por parametro e haga print si todos lo elementos son unicos repetidos
const readLine = require("readline-sync");

// Creamos la entrada del usuario
const elementos = readLine.question("Introduce una lista de elementos: ");

// Convertimos la entrada en un array separada por comas
const arrayElementos = elementos.split(",");

// Creamos una funtcion que valide los elementos del array
function verificarElementosUnicos(arrayElementos) {
    
    // Creamos una array que almacene todos los
    const setElementos = new Set(arrayElementos);

    if (arrayElementos.length === setElementos.size) {
        console.log("Todos los elementos son unicos");
        
    }else {
        console.log("Hay elementos repetidos")
    }

    //Creamos una constante que almacene todos lo elementos repetidos
    const elementosRepetidos = [];

    // Ejecutamos un bucle que me permita recorrer los elementos de nuestra array
    for (let i = 0; i < arrayElementos.length; i++){
        const elemento = arrayElementos[i];
        
        if (setElementos.has(elemento)) {
            setElementos.delete(elemento);   
        } else {
            if (!elementosRepetidos.includes(elemento)) {
                elementosRepetidos.push(elemento);
            }  
        }         
    } 
    // Imprimimos por pantalla el resultado siempre
    if (elementosRepetidos.length > 0) {
    console.log(`Los elementos repetidos son: ${elementosRepetidos}`);
    }
}
   
// Creamos una constante que llame la funtcion
const elementosUnicos = verificarElementosUnicos(arrayElementos);
