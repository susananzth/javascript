console.log('Hola Mundo!');

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar('Susana');

setTimeout(() => {
    console.log('Exte mensaje se mostrará pasados 5 segundos');
}, 5000);

console.log('Fin');

// Creación de variables con 'var'.
var numero; // Se declara la variable.

numero = 7; // Se asigna el valor a la variable.

console.log(numero); 

console.log(typeof numero);// Mostrará que es número.

numero = '7'; // Se Re asigna el valor a la variable.

console.log(typeof numero);// Mostrará que es string.

// Funciones. Sirve para reutilizar código
function sumar(a, b) {
    var suma = a + b;
    return suma;
}

console.log(sumar(5,9)); // 14

// Mostrar errores 'ReferenceError: mensaje is not defined'
function mostrarSaludo() {
    var mensaje = 'Este es el mensaje';
    return mensaje;
}

console.log(mensaje); // La variable no está definida.

// Scope
function function1() {
    var a = 2;

    function function3() {
        var b = 5;

        function function5() {
            console.log(a, b); // 2, 5
        }
    }
}

function function2() {
    var a = 7;

    function function4() {
        console.log(a); // 7
    }
}

function1();
function2();

// Constantes
let nombre = 'Susana'; // Local
var pais = 'Ven'; // Global
const pi = 3.14; // Constante

const estudiante = {id: 1, nombre: 'Susana'};

estudiante.id = 2;
console.log(estudiante); // Se puede modificar el contenido de la constante.

estudiante = {id: 2, nombre: 'Susana N.'};
console.log(estudiante); // Dará error 'TypeError: Assignment to constant variable.' No se puede cambiar la literal de la constante.

console.log(typeof "");
console.log(typeof 0);
console.log(typeof [1,2]);
console.log(typeof {});
/*
En orden, la consola mostrará las cadenas string, number, object, y object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): 
Boolean, Null, Undefined, Number, String, Symbol (nuevo con ES6), y 
BigInt (nuevo con ES2020), y un tipo para elementos mutables: Object. 
Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.
*/

let myNestedArray = [
    // Cambia solo el código debajo de esta línea
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
    [['deep', ['deeper', ['deepest']]]
  ]
];

console.log(myNestedArray);
/*
En orden, la consola mostrará las cadenas string, number, object, y object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): 
Boolean, Null, Undefined, Number, String, Symbol (nuevo con ES6), y 
BigInt (nuevo con ES2020), y un tipo para elementos mutables: Object. 
Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.*/