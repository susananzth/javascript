// Declaración y asignación de variables en JavaScript

// Declaración de variables
var nameVar 
let nameLet

// Asignación de variables
nameVar = "soy var"
nameLet = "soy let"
const nameConst = "soy const"

// Ejemplo de re-declaración de variables
/*
var nameVar = "var soy" 
let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.
const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.
*/

//Ejemplo de re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'
/*
nameConst = "otro const" //TypeError: Assignment to constant variable.
*/
