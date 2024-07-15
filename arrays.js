// Fuente: https://platzi.com/cursos/basico-javascript/

var array = [1,2,3,4];
var longitud = array.length;
console.log(longitud); // 4

var nombres = ["Andres", "Ramiro", "Silvia"];

nombres[0]; // "Andres"
nombres[1]; // "Ramiro"
nombres[2]; // "Silvia"
nombres[3]; // undefined

// Métodos de arrays
// push: agrega uno o varios elementos al final del array original
var array = [1,2,3];
array.push(4,5);
console.log(array); // [ 1, 2, 3, 4, 5 ]
// unshift: agrega uno o varios elementos al inicio del array original
var array = [3,4,5];
array.unshift(1,2);
console.log(array); // [ 1, 2, 3, 4, 5 ]
// pop: extrae el elemento del final del array original
var array = [1,2,3,4];
var lastElement = array.pop();
console.log(lastElement); // 4
console.log(array); // [ 1, 2, 3 ]
// shift: extrae el elemento del inicio del array original
var array = [1,2,3,4];
var firstElement = array.shift();
console.log(firstElement); // 1
console.log(array); // [ 2, 3, 4 ]
// indexOf: muestra el índice del elemento especificado como argumento
var array = [1,2,3,4];
var index = array.indexOf(2);
console.log(index); // 1
// si no lo consigue, devuelve "-1"
var array = [1,2,3,4];
var index = array.indexOf("hola");
console.log(index); // -1