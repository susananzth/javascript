import React from "react";
import { Link } from "react-router-dom";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function StringJS() {
  return (
    <Content
      mainTitle="Javascript"
      articleTitle="Cadena de texto | String"
      keywords="Javascript, String, Programación básica, Principios de programación"
      date="13/01/2025"
    >
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
      <h4 className="font-bold mt-2">Notación de corchetes en Strings</h4>
      <p>
          Javascript es un lenguaje "Zero-based indexing" lo que significa que empieza a contar la posición 
          de los elementos desde el cero '0' y no desde el uno '1'.
          Para acceder a la posición de una letra de una cadena de texto, se puede utilizar los corchetes 
          para mostrar el caracter en esa posición específica:
      </p>
<Code>{`const miTexto = "Cantidad de caracteres.";
console.log(miTexto[0]); // Mostrará: C.
console.log(miTexto[2]); // Mostrará: n.
console.log(miTexto[miTexto.length -2]); // Mostrará: s.`}</Code>
      <h4 className="font-bold mt-2">Entender inmutabilidad de los Strings</h4>
      <p>
          En JavaScript, los Strings son inmutables, lo que significa que 
          no se puede modificar una vez se haya creado, se tendría que reemplazar 
          todo el contenido de la variable. Por ejemplo:
      </p>
<Code>{`let miTexto = "Susana";
miTexto[0] = "Z"; // Mostrará un error.
miTexto = "Zusana"; // Forma correcta.`}</Code>
      <h4 className="text-xl font-medium pt-4">Funciones de manejo de strings</h4>
      <Acordeon>
        <AcordeonItem title=".length">
          <p>
              Se utiliza para contar los caracteres de una cadena de texto o cantidad 
              de elementos de un array.
          </p>
          <p>
              En el caso de los caracteres, tambien contará los espacios en blanco:
          </p>
<Code>{`const miTexto = "Cantidad de caracteres.";
console.log(miTexto.length); // Mostrará: 26.`}</Code>
        </AcordeonItem>
        <AcordeonItem title=".trimStart()">
          <h4 className="text-xl font-medium pt-4">.trimStart() | String.prototype.trimStart()</h4>
          <p>
            En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>.trimStart()</kbd> 
            y se utiliza para quitar espacios en blanco al inicio de una cadena de texto o <kbd>string</kbd>.
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart">
                Ver más en documentación de MDN
            </Link>
          </p>
<Code>{`const textoConEspacios = '      Hola      ';
console.log(textoConEspacios.trimStart); // Mostrará: 'Hola      '.`}</Code>
        </AcordeonItem>
        <AcordeonItem title=".trimEnd()">
          <h4 className="text-xl font-medium pt-4">.trimEnd() | String.prototype.trimEnd()</h4>
          <p>
            En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>.trimEnd()</kbd> 
            y Se utiliza para quitar espacios en blanco al final de una cadena de texto o <kbd>string</kbd>.
            <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd">
                Ver más en documentación de MDN
            </Link>
          </p>
<Code>{`const textoConEspacios = '      Hola      ';
console.log(textoConEspacios.trimEnd); // Mostrará: '      Hola'.`}</Code>
        </AcordeonItem>
        <AcordeonItem title=".replaceAll()">
          <h4 className="text-xl font-medium pt-4">.replaceAll() | String.prototype.replaceAll()</h4>
          <p>
            En Junio del 2021, en los ECMAScript 12 (ES12) se agregó el  
            <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll">
                Ver más en documentación de MDN
            </Link>
          </p>
<Code>{`const string = "Esta es, es una cadena de texto";
const stringSeparado = string.replaceAll("es", "is");
console.log.(stringSeparado);
// Mostrará: Esta is, is una cadena de texto`}</Code>
        </AcordeonItem>
        <AcordeonItem title=".padding()">
          <h4 className="text-xl font-medium pt-4">String.padding()</h4>
          <p>
            En Junio del 2017, en los ECMAScript 8 (ES8) se agregó <kbd>.padStart()</kbd> y <kbd>.padEnd()</kbd> y 
            se utiliza String.padStart() y String.padEnd() para rellenar una cadena de caracteres, se le indican dos parámetros, 
            el primero será la cantidad de caracteres que debe tener la cadena al final, y el otro parámetro será el relleno.
            <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart">
                Ver más en documentación de MDN para padStart
            </Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd">
                Ver más en documentación de MDN para padEnd
            </Link>
          </p>
<Code>{`const cadena = 'Holis';
console.log(cadena.padStart(10. '!!')); // Mostrará: '!!!!!Holis'.
console.log(cadena.padEnd(10. '!!')); // Mostrará: 'Holis!!!!!'.`}</Code>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default StringJS;
