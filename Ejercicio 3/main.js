/**Palindrome
Wrilate a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters..*/


const myArray = prompt("Escriba su palindromo");



const newArray = myArray.split("").reverse("").join("");

if (myArray === newArray) {
    alert ("Es un palindromo")
}else{
    alert ("No es un palindromo")
}



