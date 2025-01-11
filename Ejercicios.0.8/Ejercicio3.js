//Function que reciba una cadena y devuelva un Map con la frecuencia de cada carácter en la cadena.

const readLine = require("readline-sync");

//Lets aks usuario a phrase or sentence
const sentence = readLine.question("Please, you enter a phrase: ")

//Create a function where we could interate over each element and we validate that.
function characterFrequency(sentence) {
    const frequencyMap = new Map();

    for (const character of sentence) {
        //If the current character (letter) is already encountered during the loop iteration over the string, increase the counter.
        if (frequencyMap.has(character)) {
            frequencyMap.set(character, frequencyMap.get(character) + 1); 
        } else {
            //If it is not there, adds it a initial of 1.
            frequencyMap.set(character, 1);
        }
    }
    return frequencyMap;
}

// Calling the funtcion
const mapCharFrecuency = characterFrequency(sentence);

// Print the result
console.log(mapCharFrecuency);



