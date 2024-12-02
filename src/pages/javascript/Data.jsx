import React from "react";
import { Link } from "react-router-dom";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function DataJS() {
  return (
    <Content
      mainTitle="Javascript"
      articleTitle="Comentarios y Tipos de Datos"
      keywords="Javascript, Programación básica, Principios de programación"
      date="02/12/2024"
    >
      <h4 className="text-xl font-medium pt-4">Dato</h4>
      <p>Un dato es un valor que puede ser procesado por un programa.</p>

      <h4 className="text-xl font-medium pt-4 -mb-2">
        Tipos de datos en Javascript
      </h4>
      <Acordeon>
        <AcordeonItem title="Number">
          <p>
            Son la representación de los números en un dato. A través de estos podemos realizar 
            operaciones matemáticas básicas. Estos se dividen en dos tipos: enteros y flotantes o decimales.
          </p>
          <ol className="list-square *:ms-5 *:pt-2">
            <li>
              <h6 className="text-xl font-medium">Integers</h6>
              Los tipos de datos enteros consisten en la representación del número sin la parte decimal.
            </li>
            <li>
              <h6 className="text-xl font-medium pt-4">BigInt</h6>
              En Javascript lse puede representar numeros grandes con BigInt.
<Code>{`const unNumeroGrande = 402938420492409240238420n; // Se puede representarcon una 'n' al final del número.
const otroNumeroGrande = BigInt(23948240982409273520372); // Se puede utilizar esta otra forma.
console.log(unNumeroGrande);
console.log(otroNumeroGrande);`}</Code>
            </li>
            <li>
              Tipo numérico decimal o flotantes <span className="badge text-bg-secondary">decimal</span> y 
              <span className="badge text-bg-secondary">float</span>: Los tipos de datos flotantes consisten 
              en la representación del número con la parte decimal.
            </li>
            <li>
              <h6 className="text-xl font-medium pt-4">Separar numeros</h6>
              En Junio del 2021, en los ECMAScript 12 (ES12) se agregó el separador 
              de números con guión bajo <kbd>_</kbd> para que se lea más facil en el código, 
              pero no afecta su representación en el cálculo de valores:
<Code>{`const unNumeroSeparado = 100_000_000_000_000;
// Mostrará: 100000000000000 sin los guines bajos.
console.log(unNumeroSeparado);
`}</Code>
            </li>
          </ol>
        </AcordeonItem>
        <AcordeonItem title="String">
          <h4 className="font-bold">Cadenas de texto y uso de comillas</h4>
          <p>
            Las cadenas de texto (<em>String</em>) consiste en un conjunto de caracteres. 
            Los caracteres pueden ser letras, números, símbolos, espacios e incluso emojis se 
            escriben con comillas simples <kbd>' '</kbd> o con comillas dobles <kbd>" "</kbd>:
          </p>
<Code>{`const doubleQuoteStr = "Esto es un texto"; 
const singleQuoteStr = 'Esto es un texto';
const conversation = 'Finn exclaims to Jake, "Algebraic!"';`}</Code>
          <h4 className="font-bold mt-2">Escape de comillas</h4>
          <p>
            En algunos casos será necesario utilizar el mismo tipo de comillas con el que se 
            declara la cadena de texto dentro del mismo texto, para que esto no de error, se utiliza 
            la siguiente sintaxis para que la comilla sea considerada parte de la cadena de texto 
            y no sea interpretado como que la cadena llegue a ese punto:
          </p>
<Code>{`const sampleStr = "Alan said, \\"Peter is learning JavaScript\\".";
console.log(sampleStr); // Mostrará: Alan said, "Peter is learning JavaScript".`}</Code>
          <h4 className="font-bold mt-2">Plantillas literales (plantillas de cadenas) | Template literals</h4>
          <p>
            En Junio del 2015, en los ECMAScript 6 (ES6) se añade una forma de 
            incrustar expresiones en cadena de string utilizando comillas francesas:
            <Link className="ms-2" to="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals">
              Ver más en documentación de MDN
            </Link>
          </p>
<Code>{`\`texto de cadena de caracteres\`
\`línea 1 de la cadena de caracteres
  línea 2 de la cadena de caracteres\`

let saludo = 'Hola';
let nombre = 'Susana';
let textoCompleto = \`Este es el saludo: '\${saludo}' para \${nombre}.\`;
console.log(textoCompleto); // Mostrará: Este es el saludo: 'Hola' para Susana.`}</Code>
          <h4 className="font-bold mt-2">Escape de otros caracteres</h4>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><kbd>\'</kbd></td>
                <td>single quote</td>
              </tr>
              <tr>
                <td><kbd>\"</kbd></td>
                <td>double quote</td>
              </tr>
              <tr>
                <td><kbd>\\</kbd></td>
                <td>backslash</td>
              </tr>
              <tr>
                <td><kbd>\n</kbd></td>
                <td>newline</td>
              </tr>
              <tr>
                <td><kbd>\t</kbd></td>
                <td>tab</td>
              </tr>
              <tr>
                <td><kbd>\r</kbd></td>
                <td>carriage return</td>
              </tr>
              <tr>
                <td><kbd>\b</kbd></td>
                <td>backspace</td>
              </tr>
              <tr>
                <td><kbd>\f</kbd></td>
                <td>form feed</td>
              </tr>
            </tbody>
          </table>
          <h4 className="font-bold mt-2">Suma de Strings o Concatenación</h4>
          <p>
            En el caso que se desee concatenar o unir mas de una cadena de texto o variable 
            se utiliza el operador de la suma <kbd>+</kbd> o <kbd>+=</kbd>, sólo que en el caso de que 
            las variables no sean de tipo numérico <kbd>Number</kbd>, 
            se unirán más no se sumarán:
          </p>
<Code>{`const miSuma = '5' + 10; // Nótese que el 5 es un String.
console.log(miSuma); // El resultado será 510.

const cadenaTexto = "I come first. " + "I come second.";
console.log(cadenaTexto); // El resultado: 'I come first. I come second.'.

let cadenaDos = "I come first. ";
cadenaDos += "I come second.";
console.log(cadenaDos); // El resultado: 'I come first. I come second.'.

let primerTexto  = "I come first. ";
let seguntoTexto = "I come second.";
console.log(primerTexto += seguntoTexto); // El resultado: 'I come first. I come second.'.

const nombre = "freeCodeCamp";
const texto = "Hello, our name is " + nombre + ", how are you?";
console.log(texto); // El resultado: 'Hello, our name is freeCodeCamp, how are you?'.`}</Code>
        </AcordeonItem>
        <AcordeonItem title="Boolean">
          <p>
            En Javascript las variables boleanas se escriben 
            como <kbd>true</kbd> o <kbd>false</kbd> (Verdadero o falso) sin comillas, 
            son mutualmente excluyente. Si se sscribe con comillas <kbd>"true"</kbd> y <kbd>"false"</kbd> serán 
            considerados valores tipo string por Javascript.
          </p>
<Code>{`const esVerdadero = false;
const esDeDia = true;`}</Code>
        </AcordeonItem>
      </Acordeon>
      <ol className="list-square *:ms-5 *:pt-2">
        <li>
          <code className="font-mono text-indigo-700">Null</code>: Representa la
          ausencia intencional de un valor.
        </li>
        <li>
          <code className="font-mono text-indigo-700">Undefined</code>: Indica
          que una variable ha sido declarada pero no asignada.
        </li>
        <li>
          <code className="font-mono text-indigo-700">Object</code>: Estructura
          de datos compleja, puede contener pares clave-valor.
        </li>
        <li>
          <code className="font-mono text-indigo-700">Symbol</code>: Tipo único
          y inmutable, principalmente usado como identificadores únicos.
        </li>
      </ol>
      <Link
        to="/fundamentos/tipos_datos"
        className="no-underline hover:underline decoration-indigo-700"
      >
        Ver los tipos de datos.
      </Link>

      <h4 className="text-xl font-medium pt-4">Información</h4>
      <p>
        La información es el resultado de procesar y organizar datos para que
        sean útiles y significativos.
      </p>
    </Content>
  );
}

export default DataJS;
