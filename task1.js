//Esta libea conecta con node
const prompt = require("prompt-sync")();

// Preguntar nombre 
const name = prompt("Ingresa tu nombre: ");
console.log(`Hola ${name}! Aquí están los números del 1 al 105:\n`);

// TAREA 1: Mostrar números del 1 al 105
for (let i = 1; i <= 105; i++) {
    console.log(i);
}