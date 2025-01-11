//Implementar un algoritmo de ordenación bubble sort y quick sort comprueba cuánto tarda en ejecutarse, array 100 000 num randow

//We imported the crypto library that we permit us to generate random numbers.
const crypto = require('crypto');

//We create a function that allows us to extract the desired number of elements.
function randomNumbers (size) {
// We define an array 
const randomNumber = [];

//We extract n(size) elements randow with the next loop. 
for (let i = 0; i < size; i++) {
    randomNumber.push(crypto.randomInt(0, 100000));
}
return randomNumber
}

//We generate an algorithm bubble sort
function bubbleSort (array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                //Switch the elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

//We generate an algorithm quick sort
function quickSort(array) {
    if (array.length <= 1) {
        return array; // An array with 0 or 1 elements already sort
    }

    const pivot = array[array.length - 1]; // Choose the last element likes pivot
    const left = []; // Elements < that the pivot
    const right = []; // Elements > that the pivot

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]); // Add to left if < that the pivot
        } else {
            right.push(array[i]); // Add to right if > 0r = to pivot
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

//Calling the function to generate an array of size 100.000 
const arrayRandom = randomNumbers(100000); 

//We measure the execution time of the bubble sort algorithm
console.time("Bubble Sort");
bubbleSort(arrayRandom.slice());
console.timeEnd("Bubble Sort");

//We measure the execution time of the quick sort algorithm

console.time("Quick Sort");
quickSort(arrayRandom);
console.timeEnd("Quick Sort");






