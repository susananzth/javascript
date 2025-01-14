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
      date="13/01/2025"
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
