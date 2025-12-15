//Esta línea conecta con node
const prompt = require("prompt-sync")();

// Preguntar nombre 
const name = prompt("Ingresa tu nombre: ");
console.log(`Hola ${name}! Números del 1 al 105 (FizzBuzz):\n`);

// TAREA 3: Fizz para 3, Buzz para 5, FizzBuzz para ambos
for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");      
    } else if (i % 3 === 0) {
        console.log("Fizz");          
    } else if (i % 5 === 0) {
        console.log("Buzz");          
    } else {
        console.log(i);               
    }
}