//Esta línea conecta con node
const prompt = require("prompt-sync")();

// Preguntar nombre 
const name = prompt("Ingresa tu nombre: ");
console.log(`Hola ${name}! Números del 1 al 105 (Fizz en múltiplos de 3):\n`);

// Mostrar números, reemplazar múltiplos de 3 con "Fizz"
for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");      
    } else {
        console.log(i);          
    }  
}    