//Función que verifique si una secuencia de paréntesis, corchetes, y llaves es válida.

// We'll use to stack method for this case
// We create a function
function symbolsSecuency (text) {
    //We define a const stack and initialize it with an empty value
    const stack = [];

    //We add a const that we help us to validate the sequence
    const secuencyMatching = {
        ')':'(',
        ']': '[',
        '}': '{',
    };

    //We iniciate the loop
    for (const char of text) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== secuencyMatching [char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
 
//We define a constant that includes a text string containing parentheses, brace, brackets.
const text1 = ("[{()]}")

//Calling the funtcion
if (symbolsSecuency(text1)) {
    console.log(`The sencuency is correct.`);
} else {
    console.log(`The sencuency is not correct.`);
}
