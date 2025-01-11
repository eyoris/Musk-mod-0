// Ejercicio para una function que reciba un texto y devuelva las palabras que se repiten en dicho texto

// We define the phrase
const prhase = ("Dont let me down, dont let me down, Nobody ever loved me like she does");

// We convert the text or string into an Array
const words = prhase.toLowerCase().split(/\s+/);

// We define the function that we'll use it//
function findTheWords(prhase) {

    // We define two sets to store unique words and words that don't repeat
    const uniqueWords = new Set(); 
    const nonRepeatedWords = new Set();

    // We iterate over each element of our set and compare it to the elements 
    // of the other set to determine if there are any duplicates
    words.forEach(word => {
        if(uniqueWords.has(word)) {
            nonRepeatedWords.add(word);
        } else {
            uniqueWords.add(word);
        }  
    });

    return Array.from(nonRepeatedWords); 
}

// calling the function 
const repeatedWord = findTheWords(prhase);

// Print to result
console.log(`La siguientes palabras se repiten: ${repeatedWord}`);


