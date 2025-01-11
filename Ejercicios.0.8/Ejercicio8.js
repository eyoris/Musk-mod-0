//Función que reciba un número y devuelva si dicho número es primo o no

const readLine = require("readline-sync");

//Lets aks usuario a number
const number = Number(readLine.question("Please, you enter a number: "));

// We validate that the input is a number and that the number is greater than 2
if(isNaN(number) || number <= 2) {
    console.log("Please, enter a valid number, the number must be a number > 2 (The input must be a number)");
} else {
    //Calling the function
if (numIsPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not prime number.`);
}

}

// We create a funtcion to validate if a number is prime
function numIsPrime(number) {
// We validate if our number is divisible by any number from 2 up to its square root
for (let i = 2; i <= Math.sqrt(number); i ++) {
    if (number % i === 0) {
        return false;
    }
}
return true;
}

