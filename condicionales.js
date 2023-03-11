// fuente: https://platzi.com/cursos/basico-javascript/


// IF ELSE
var edad = 35;
if (edad >= 18) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

// IF, ELSE IF, ELSE
var precio = 10;
var articulos = 10;
if (articulos >= 5 && articulos < 10) {
   precio = precio * (1-0.10);
} else if (articulos >= 10 && articulos < 15) {
    precio = precio * (1-0.15);
} else {
    precio = precio * (1-0.20);
}
console.log(precio);

// Operador ternario
function esPar(numero) {
    return numero % 2 === 0 ? "Es par" : "No es par";
}

console.log(esPar(2)); // "Es par"
console.log(esPar(3)); // "No es par"

// SWITCH
function semaforo(color) {
    switch (color) {
    case "verde": {
        console.log("¡Sigue!");
    break
        }
    case "amarillo": {
        console.log("¡Detente!");
    break
        }
    case "rojo": {
        console.log("¡No puedes avanzar!");
    break
        }
    default: {
        console.log("¡No reconozco ese color! :(");
    }
    }
}
console.log(semaforo("verde")); //'¡Sigue!'