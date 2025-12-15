//Esta línea conecta con node
const prompt = require("prompt-sync")();

// Preguntar nombre 
const name = prompt("Ingresa tu nombre: ");
console.log(`Hola ${name}! Números del 1 al 105 (FizzBuzzWoof):\n`);

// TAREA 4: Fizz para 3, Buzz para 5, Woof para 7, combinaciones
for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log("FizzBuzzWoof");    // Divisible por 3, 5 y 7
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");        // Divisible por 3 y 5
    } else if (i % 3 === 0 && i % 7 === 0) {
        console.log("FizzWoof");        // Divisible por 3 y 7
    } else if (i % 5 === 0 && i % 7 === 0) {
        console.log("BuzzWoof");        // Divisible por 5 y 7
    } else if (i % 3 === 0) {
        console.log("Fizz");            // Solo divisible por 3
    } else if (i % 5 === 0) {
        console.log("Buzz");            // Solo divisible por 5
    } else if (i % 7 === 0) {
        console.log("Woof");            // Solo divisible por 7
    } else {
        console.log(i);                 // No divisible por 3, 5 ni 7
    }
}