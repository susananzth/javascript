// Fuente: https://platzi.com/cursos/basico-javascript/

// Operadores aritméticos

// Suma
2 + 3; // 5
// Resta
5 - 3; // 2
// Multiplicación
4 * 2; // 8
// División
6 / 2; // 3

// Operador de residuo
21 % 5; // 1

// Operador de concatenación
"Hola" + "Platzi"; // "Hola Platzi"

// Operadores de asignación
var saludo = "Hola Mundo";
var contador = 1;
contador = contador + 1;
contador = contador + 1;
console.log(contador); // 3

var contador2 = 1;
contador2 += 2;
contador2 -= 1;
contador2 *= 5;
contador2 /= 2;

console.log(contador2);

// Operador de incremento y decremento
var a = 3;
var b = 3;

console.log(a++); //3
console.log(++b); //4
console.log(a); //4
console.log(b); //4

// Operadores de igualdad
//Igualdad
"3" == 3; // true
3 == 3; // true

// Igualdad estricta
"3" === 3; // false
3 === 3; // true

// Operadores de mayor o menor
// Menor que
3 < 5; // true

// Mayor que
3 > 5; // false

// Mayor o igual a que
3 >= 3; // truecs
3 >= 5; // false

// Menor o igual a que
3 <= 3; // true
3 <= 5; // true

// Operadores lógicos
var a = 15;
var b = 5;

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false

// Operador unión lógico
var a = 15;
var b = 5;

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true

// Operador negación lógico
var a = 5;

!(a < 0) // true