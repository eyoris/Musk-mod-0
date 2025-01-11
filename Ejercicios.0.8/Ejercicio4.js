//Función que reciba dos cadenas y verifique si son anagramas utilizando un Map.

//First, we defined two strings, asking the user for two words
const readLine = require("readline-sync");

const string1 = readLine.question("Please, you enter a word: ");
const string2 = readLine.question("Now, please you enter another word: ");

//Then we compared the sizes of both strings. If they are not the same size, they cannot be anagrams

if (string1.length !== string2.length) {
    console.log("The string is not anagrams");
} else {
    //Calling the function
    const mapAnagrams = characterFrequency(string1,string2);
}

//Now we create a function that uses the map method to store each element of the string and its frequency

function characterFrequency(string1, string2) {
    //We defined a const to map.method
    const frequencyMap = new Map();

    //We define the values and keys of our map using a set for each, then we count the frequency
    for (const character of string1) {
        frequencyMap.set(character, (frequencyMap.get(character) || 0) + 1);
    }

    //Now we compare both strings
    //If the character frequencies do not match between the two strings, they are not anagrams.
    for (const character of string2) {
        frequencyMap.set(character, (frequencyMap.get(character) - 1));  
    } 
    //Print Anagram if the size of values in our map is 0; otherwise, print Not Anagram
    if ([...frequencyMap.values()].every(value => value === 0)) {
        console.log("The strings make up an anagram");
        return true;
      } else {
        console.log("The strings dont make up an anagram")
        return false;
      }
}




