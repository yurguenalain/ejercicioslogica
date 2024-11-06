/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/



const number = parseInt(prompt("Ingrese su numero para obtener el factorial"));

let factorial = 1
for (let i = 1; i <= number; i++) {
    factorial*= i;
}

alert (`Su numero factorial es ${factorial}`);

