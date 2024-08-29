let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let peso = prompt("Ingresa tu peso en kilogramos");
let estatura = prompt("Ingresa tu estatura en metros");

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Peso: " + peso + " kg");
console.log("Estatura: " + estatura + " m");

let IMC = parseFloat(peso) / (parseFloat(estatura) * parseFloat(estatura));
console.log("Tu Índice de Masa Corporal es: " + IMC.toFixed(2));
