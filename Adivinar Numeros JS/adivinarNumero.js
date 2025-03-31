// Generador de numeros 
const numero1 = Math.floor(Math.random() * 10) + 1;
const numero2 = Math.floor(Math.random() * 10) + 1;

console.log(numero1)
console.log(numero2)

alert("Bienvenido al juego de los numeros, tienes que adivinar dos numeros entre el 1 y 10");

//Intentos 
let intentos1 = 2;
let intentos2 = 2;
let numeroIngresado1, numeroIngresado2;

// Primer número
while (intentos1 > 0 && numeroIngresado1 != numero1 && numeroIngresado2 != numero2) {
    numeroIngresado1 = parseInt(prompt("Ingrese el primer numero entre 1 y 10. Tienes " + intentos1 + " intentos restantes:"));
    numeroIngresado2 = parseInt(prompt("Ingrese el segundo número entre 1 y 10. Tienes " + intentos1 + " intentos restantes:"));
    
    if (numeroIngresado1 === numero1 || numeroIngresado2 === numero2) {
        alert("Ganaste");
        break; // "break" es para terminar el bucle si el numero es correcto 
    } else {
        intentos1--;
        alert("Incorrecto. Te quedan " + intentos1 + " intentos.");
    }
}

if (intentos1 === 0) {
    alert("No has adivinado el primer número. Era: " + numero1);
}

// Segundo número
while (intentos2 > 0 && numeroIngresado1 != numero1 && numeroIngresado2 != numero2) {
    numeroIngresado2 = parseInt(prompt("Ingrese el segundo número entre 1 y 10. Tienes " + intentos2 + " intentos restantes:"));
    
    if (numeroIngresado2 === numero2) {
        alert("Ganaste");
        break; // "break" es para terminar el bucle si el numero es correcto
    } else {
        intentos2--;
        alert("Incorrecto. Te quedan " + intentos2 + " intentos.");
    }
}

if (intentos2 === 0) {
    alert("Perdiste. Era: " + numero2);
}

