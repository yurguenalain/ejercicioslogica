/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".*/

const alarm = parseInt(prompt("Escriba en cuantos segundos quiere que suene la alarma"));


let number = 0;
function alarmSet(alarm) {
setTimeout(() => {
    alert(`Es hora de la alrma despues de los ${alarm} segundos`);
}, alarm * 1000);

}

alarmSet(alarm);

