//Función que invierta el orden de una palabra usando una pila (stack)

//Asking the user for two words
const readLine = require("readline-sync");

const word = readLine.question("Please, you enter a word: ");

//We create a function for we can inverted a word using a stack
function invertedWord(word) {
    //We defined a const like a stack
    const stack = [];

    //Now, we need to add each character of word to a stack.
    for (const char of word) {
        stack.push(char);
    }
    
    //We create a variable to store the characters of the inverse word
    let reverseWord = "";

    //We iterate over each character in our stack and add it to our variable
    for (let i = 0; stack.length > 0; i++){
        reverseWord += stack.pop();
    }

return reverseWord
}

//Calling the funtcion
const reverseWord = invertedWord(word);

//Print the result
console.log(`The inverted word is: ${reverseWord}`);

