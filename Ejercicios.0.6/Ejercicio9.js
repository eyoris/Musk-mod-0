// Ejercicio donde se solicite un número al usuario (del 0 al 10) y devuelva el número escrito en letras //

// Solicitud de entrada a la consola //

const readLine = require("readline-sync");

// Const para solicitar al usuario numero del 1 al 10 //
const contarNum = Number(readLine.question("Por favor indroduce un num del 1 al 10: "));

// Creamos un array con los numeros escritos en palabras //

const numeroEnLetras = ["Cero","Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"];

// Validamos la entrada, que sea un numero //

if (isNaN(contarNum) || contarNum < 0 || contarNum > 10) {
    console.log("El numero ingresado no es un numero correcto, favor ingrese un numero del 1 al 10");
} else {
        //Imprimimos por pantalla el resultado// 
        console.log(`${numeroEnLetras[contarNum]}`);
        }
    
