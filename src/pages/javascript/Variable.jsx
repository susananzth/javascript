import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function VariableJS() {
  return (
    <Content
      mainTitle="Javascript"
      articleTitle="Variables"
      keywords="Javascript, Programación básica, Principios de programación"
      date="02/12/2024"
    >
      <h4 className="text-xl font-medium pt-4">Variable</h4>
      <p>
        Una variable es un elemento fundamental en la programación. Piensa en
        una variable como una caja con un nombre, donde puedes guardar un valor.
      </p>
      <p>
        Para nombrar variables hay que tener en cuenta que son <em>case sensitive</em>, por lo que
        si nombramos una variable como <kbd>MYVAR</kbd> no será lo mismo que <kbd>MyVar</kbd> ni <kbd>myvar</kbd>. 
      </p>
      <h4 className="text-xl font-medium pt-4 -mb-2">
        ¿Por qué son útiles las variables?
      </h4>
      <ol className="list-square *:ms-5 *:pt-2">
        <li>
          <strong>Almacenamiento de Datos</strong>: Permiten guardar datos que
          pueden ser utilizados más adelante en el programa.
        </li>
        <li>
          <strong>Reutilización</strong>: Puedes usar el mismo valor en
          diferentes partes del programa sin tener que repetirlo.
        </li>
        <li>
          <strong>Flexibilidad</strong>: Facilitan la actualización de valores.
          Si necesitas cambiar un dato, solo modificas el valor de la variable.
        </li>
        <li>
          <strong>Claridad</strong>: Usar nombres de variables descriptivos hace
          que el código sea más fácil de leer y entender.
        </li>
        <li>
          <strong>Manipulación de Datos</strong>: Puedes realizar operaciones y
          transformaciones con los datos almacenados en las variables.
        </li>
      </ol>

      <h4 className="text-xl font-medium pt-4">Tipos de Variables</h4>
      <Acordeon>
        <AcordeonItem title="var">
          <p>
            Declaración más antigua, tiene un alcance global o de función. Puede
            ser redeclarada y actualizada.
          </p>
          <p>Declaración de la variable</p>
<Code>{`var unaVariable;
var otroNombreDeVariable;
var esteNombreDeVariableEsMuyLargo;`}</Code>
          <p>Para asignar un valor a una variable, se puede realizar de varias formas:</p>
<Code>{`var miNumero; // Primero se declara,
miNumero = 5; // Luego se asigna con el operador '='.

var miNombre = "Susana"; // se declara y se asigna el valor en la misma línea.`}</Code>
          <p>Con la declaracion de variables utilizando la palabra 
            <kbd>var</kbd>, podemor reescribir o reasignar
            el valor de la variable, además que tiene un alcance global (gloabl scope):</p>
<Code>{`var miVar = 5; // Se declara y asigna el valor '5'
var miNumero; // Se declara una nueva variable
miNumero = miVar; // Se asigna el valor de la vieja variable a la nueva.
console.log([miVar, miNumero]); // Se imprimirá en consola: [5, 5] -> Tipo array

var nombre = "James"; // Se declara y asigna el valor 'James'
var nombre = "David"; // Se re-declara y asigna el valor 'David'
console.log(nombre); // // Se imprimirá en consola: 'David' -> tipo String
// Se imprime el segundo valor asignado ya que se está redeclarando la variable (Borrón y cuenta nueva).`}</Code>
        </AcordeonItem>

        <AcordeonItem title="let">
          <p>
            En Junio del 2015, en los ECMAScript 6 (ES6) se añade nueva forma de declarar variable. 
            Palabra reservada (<em>keywork</em>) <kbd>let</kbd>: este tipo de variable tiene 
            un alcance local (local scope) lo que significa que solo existe dentro
            del bloque donde se define y se utiliza para prevenir el error de re-declarar 
            ya que puede ser actualizada, pero no redeclarada en el mismo alcance.
          </p>
          <p>Declaración de la variable</p>
<Code>{`let nameLet`}</Code>
          <p>Asignación de la variable</p>
<Code>{`nameLet = "soy let"`}</Code>
          <p>Redeclaración de la variable</p>
<Code>{`let nameLet = "let soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameLet' has already been declared.`}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameLet = "otro let"
console.log(nameLet) // otro let'`}</Code>
        </AcordeonItem>

        <AcordeonItem title="const" style="rounded-b-xl">
          <p>
            En Junio del 2015, en los ECMAScript 6 (ES6) se añade nueva forma de declarar variable. 
            Palabra reservada (<em>keywork</em>) <kbd>conts</kbd>: este tipo de variable tiene 
            un alcance local (local scope), esta se utiliza para declarar variables de solo lectura. 
            Esta tiene todas las cualidades que <kbd>let</kbd> con el plus que no se puede cambiar 
            el valor porque es solo lectura.
          </p>
          <p>Declaración y asignación de la variable</p>
<Code>{`const nameConst = "soy const"`}</Code>
          <p>Redeclaración de la variable</p>
<Code >{`const nameConst = "const soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameConst' has already been declared.`}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameConst = "otro const"
// Mostrará un error:
//TypeError: Assignment to constant variable.`}</Code>
          <p>
            Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), 
            asignados a una variable usando <kbd>const</kbd> siguen siendo mutables. Usar la 
            declaración <kbd>const</kbd> solo previene la reasignación del identificador de una variable.
          </p>
<Code>{`const s = [5, 6, 7]; // Se declara la constante.
s = [1, 2, 3]; // Da error porque no se puede reasignar una constante por el identificador de la variable.
s[2] = 45; // El contenido del arreglo, objeto o función si se puede modificar
console.log(s); // Mostrará: [5, 6, 45]`}
</Code>
        </AcordeonItem>
      </Acordeon>

      <h4 className="text-xl font-medium pt-4">
        Reglas y recomendaciones para nombrar variables, constantes, objetos y
        funciones en JavaScript
      </h4>
      <Acordeon>
        <AcordeonItem title="Reglas Obligatorias">
          <ol className="list-square *:ms-5 *:pt-2">
            <li>
              <strong>Carácter Inicial</strong>: Debe comenzar con una letra
              (a-z, A-Z), un guion bajo (_) o un signo de dólar ($).
<Code>{`var _variable;
let $valor;`}</Code>
            </li>
            <li>
              <strong>Carácteres Permitidos</strong>: Pueden contener letras,
              números, guiones bajos (_) y signos de dólar ($).
<Code>{`let variable1;
var mi_Variable;`}</Code>
            </li>
            <li>
              <strong>Palabras Reservadas</strong>: No pueden usar palabras
              reservadas de JavaScript (como{" "}
              <code className="font-mono text-indigo-700">class</code>,{" "}
              <code className="font-mono text-indigo-700">return</code>,{" "}
              <code className="font-mono text-indigo-700">function</code>).
<Code>{`// Ejemplo incorrecto:
var function = 5;`}</Code>
            </li>
          </ol>
        </AcordeonItem>
        <AcordeonItem title="Reglas Opcionales (Buenas Prácticas)">
          <ol className="list-square *:ms-5 *:pt-2">
            <li>
              <strong>Carácteres Permitidos</strong>: Pueden contener letras,
              números, guiones bajos (_) y signos de dólar ($).
<Code>{`var variable1;
let mi_Variable;`}</Code>
            </li>
            <li>
              <strong>Camel Case</strong>: Usar camelCase para variables y
              funciones. La primera palabra en minúscula y cada palabra
              subsiguiente con la primera letra en mayúscula.
<Code>{`let miVariableEjemplo;
var calcularArea;`}</Code>
            </li>
            <li>
              <strong>Nombres Descriptivos</strong>: Usar nombres que describan
              claramente la función o el propósito de la variable o función.
<Code>{`var numeroDeUsuarios;
let calculaPromedio;`}</Code>
            </li>
            <li>
              <strong>Constantes en Mayúsculas</strong>: Usar mayúsculas y
              guiones bajos para las constantes.
<Code>{`const MAX_VELOCIDAD = 80;
const PI = 3.14`}</Code>
            </li>
            <li>
              <strong>Funciones como Verbos</strong>: Nombrar funciones como
              acciones o verbos.
<Code>{`function obtenerDatos() {
}

function actualizarUsuario() {
}`}</Code>
            </li>
          </ol>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default VariableJS;
