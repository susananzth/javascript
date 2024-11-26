import React from "react";
import { Link } from "react-router-dom";
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
      date="18/10/2024"
    >
      <h4 className="text-xl font-medium pt-4">Dato</h4>
      <p>Un dato es un valor que puede ser procesado por un programa.</p>

      <h4 className="text-xl font-medium pt-4 -mb-2">
        Tipos de datos en Javascript
      </h4>
      <ol className="list-square *:ms-5 *:pt-2">
        <li>
          <code className="font-mono text-indigo-700">Number</code>: Para
          números, tanto enteros como decimales.
        </li>
        <li>
          <code className="font-mono text-indigo-700">String</code>: Para texto,
          delimitado por comillas simples o dobles.
        </li>
        <li>
          <code className="font-mono text-indigo-700">Boolean</code>: Solo puede
          ser true o false.
        </li>
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
        <li>
          <code className="font-mono text-indigo-700">bigint</code>.
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

      <h4 className="text-xl font-medium pt-4">Variable</h4>
      <p>
        Una variable es un elemento fundamental en la programación. Piensa en
        una variable como una caja con un nombre, donde puedes guardar un valor.
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
<Code>{`var nameVar `}</Code>
          <p>Asignación de la variable</p>
<Code>{`nameVar = "soy var"`}</Code>
          <p>Redeclaración de la variable</p>
<Code>{`var nameVar = "var soy" `}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameVar = "otro var"
console.log(nameVar) // otro var'`}</Code>
        </AcordeonItem>

        <AcordeonItem title="let">
          <p>
            Tiene un alcance de bloque, lo que significa que solo existe dentro
            del bloque donde se define. Puede ser actualizada, pero no
            redeclarada en el mismo alcance.
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
            También tiene un alcance de bloque. Su valor no puede ser cambiado
            una vez asignado, ni puede ser redeclarada.
          </p>
          <p>Declaración y asignación de la variable</p>
<Code>{`const nameConst = "soy const"`}</Code>
          <p>Redeclaración de la variable</p>
<Code >{`const nameConst = "const soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameConst' has already been declared.`}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameConst = "otro const"
//TypeError: Assignment to constant variable.`}</Code>
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
