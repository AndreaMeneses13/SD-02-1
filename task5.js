// Esta línea conecta con node
const prompt = require("prompt-sync")();

console.log(" FIZZBUZZ ");
console.log("Puedes elegir dos opciones:\n");

// Preguntar qué quiere hacer
console.log("1. Generar una cantidad específica de líneas");
console.log("2. Ver una línea específica");
const opcion = prompt("Elige una opción (1 o 2): ");

if (opcion === "1") {
    // OPCIÓN 1: Generar n lineas
    const cantidad = parseInt(prompt("¿Cuántas líneas quieres generar? "));
    
    console.log(`\n Generando ${cantidad} líneas \n`);
    
    for (let i = 1; i <= cantidad; i++) {
        let resultado = "";
        
        if (i % 3 === 0) resultado += "Fizz";
        if (i % 5 === 0) resultado += "Buzz";
        if (i % 7 === 0) resultado += "Woof";
        
        console.log(`${i}: ${resultado || i}`);
    }
    
} else if (opcion === "2") {
    // OPCIÓN 2: Ver una línea específica
    const linea = parseInt(prompt("¿Qué línea quieres ver (número)? "));
    
    let resultado = "";
    
    if (linea % 3 === 0) resultado += "Fizz";
    if (linea % 5 === 0) resultado += "Buzz";
    if (linea % 7 === 0) resultado += "Woof";
    
    console.log(`\n Línea ${linea} `);
    console.log(`Resultado: ${resultado || linea}`);//Si hay palabra Fizz/Buzz, pon esa palabra. Si no hay palabra, pon el número.
    
} else {
    console.log("Opción no válida. Debe ser 1 o 2.");
}