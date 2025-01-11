// Función que invierte el orden de las palabras usando una pila (stack)

// Asking the user for multiple words
const readLine = require("readline-sync");
const input = readLine.question("Please, enter words separated by spaces: ");

// We create a function to invert a word using a stack
function invertedWord(word) {
    // We define a const like a stack
    const stack = [];

    // Now, we need to add each character of the word to the stack.
    for (const char of word) {
        stack.push(char);
    }

    // We create a variable to store the characters of the inverted word
    let reverseWord = "";

    // We iterate over each character in our stack and add it to our variable
    while (stack.length > 0) {
        reverseWord += stack.pop();
    }

    return reverseWord;
}

// Split the input into an array of words
const wordsArray = input.split(" ");

// Create an array to hold the inverted words
const reversedWordsArray = [];

// Iterate over each word and invert it
for (const word of wordsArray) {
    const reversedWord = invertedWord(word);
    reversedWordsArray.push(reversedWord);
}

// Join the reversed words into a single string
const result = reversedWordsArray.join(" ");

// Print the result
console.log(`The inverted words are: ${result}`);

