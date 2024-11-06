/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers./*/

const number1 = parseFloat(prompt("Escribe tu primer numero"));
const number2 = parseFloat(prompt("Escribe tu segundo numero"));
const number3 = parseFloat(prompt("Escribe tu tercer numero"));
const number4 = parseFloat(prompt("Escribe tu cuarto numero"));
const number5 = parseFloat(prompt("Escribe tu quinto numero"));
const number6 = parseFloat(prompt("Escribe tu sexto numero"));
const number7 = parseFloat(prompt("Escribe tu septimo numero"));
const number8 = parseFloat(prompt("Escribe tu octavo numero"));
const number9 = parseFloat(prompt("Escribe tu noveno numero"));
const number10 = parseFloat(prompt("Escribe tu decimo numero"));


const myArray = [number1, number2, number3,number4,number5,number6,number7,number8,number9,number10];

let higthestNumber = myArray[0];

for (let i = 0; i < myArray.length; i++) {
     if (myArray[i]> higthestNumber) {
        higthestNumber = myArray[i];        
     } 
     }


     console.log(`El numero mas alto es ${higthestNumber}`);

     




