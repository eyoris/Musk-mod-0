
// Ejercicio de function que reciba 2 array de num y devuelva un array con los elementos que estan en 1er Array <> 2do Array.

// First, we create a function that generates random numbers inside an Array
function generatesRandomArray(size,min,max) {
    const array = [];

    for (let i = 0; i < size; i++) {
        // Generate a random number between min and max
        const randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
        array.push(randomNumber);
    }
    return array;
}

// Then, we create a function to filter elements from an array that are not included in another array.
function differenceArrays(array1,array2) {
    //We use the filter method to iterate over elements in array1 and select those that are not present in array2.
    return array1.filter(element => !array2.includes(element));
}

//Calling the function for generate the arrays 
const array1 = generatesRandomArray(5,1,10);
const array2 = generatesRandomArray(5,1,10);

//print to result
console.log(array1);
console.log(array2); 

//Calling the function for generate the arrays 
const uniquesElement = differenceArrays(array1, array2);

//print to result
console.log(uniquesElement);



