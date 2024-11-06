/*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/

const name = prompt("Ingrese su nombre");
const age = prompt("Ingrese su edad");
const movies = prompt("Ingrese su lista de sus mejores peliclas");

console.log(`El nombre ingresado es ${name}`);
console.log(`La edad ingresada es de ${age}`);
console.log(`Las peliculas ingresadas son: ${movies}`);