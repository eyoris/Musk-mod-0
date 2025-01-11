// Función que, dado un texto con paréntesis, indique si dichos paréntesis están balanceados

// We'll use to stack method for this case
// We create a function
function ParenthesesBalanced (text) {
    //We define a const stack and initialize it with an empty value
    const stack = [];

    //We iniciate the loop
    for (const char of text) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}
 
//We define a constant that includes a text string containing parentheses
const parentheses1 = ("(()")

//Calling the funtcion
if (ParenthesesBalanced(parentheses1)) {
    console.log(`It is balanced.`);
} else {
    console.log(`It is not balanced.`);
}

