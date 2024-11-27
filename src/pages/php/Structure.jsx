import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function Structure() {
  return (
    <>
      <Content
        mainTitle="PHP"
        articleTitle="Estructura básica"
        keywords="PHP, Programación básica, Principios de programación"
        date="27/11/2024"
      >
        <Acordeon>
          <AcordeonItem title="Abrir y cerrar bloque de código" style="rounded-b-xl">
            <p>Etiquetas para abrir y cerrar bloques de 
              código <code className="font-mono text-indigo-700">PHP</code> en 
              un archivo.</p>
<Code language="php">{`<?php
  // Código PHP aquí
  echo "Hola Mundo";
?>`}</Code>
          </AcordeonItem>
          <AcordeonItem title="Comentarios en el código" style="rounded-b-xl">
            <p>Los comentarios</p>
            <h4 className="font-bold">Comentarios de una línea</h4>
            <Code language="php">{`// Esto es un comentario de una sola línea
# Este también es un comentario de una sola línea`}</Code>
            <h4 className="font-bold">Comentarios de multiples líneas</h4>
            <Code language="php">{`/*
Este es un comentario de múltiples líneas.
Puede abarcar varias líneas.
*/`}</Code>
            <h4 className="font-bold">Uso recomendable de comentarios</h4>
            <p>Cuando documentas funciones, es importante incluir una descripción, 
              los parámetros y el valor de retorno. Ejemplo:</p>
            <Code language="php">{`/**
 * Suma dos números.
 *
 * Esta función toma dos números como parámetros y devuelve su suma.
 *
 * @param float $a El primer número.
 * @param float $b El segundo número.
 * @return float La suma de los dos números.
 */
function sumar($a, $b) {
  return $a + $b;
}

/**
 * Calcula el área de un círculo.
 *
 * Esta función toma el radio de un círculo y devuelve el área calculada.
 *
 * @param float $radio El radio del círculo.
 * @return float El área del círculo.
 */
function calcularAreaCirculo($radio) {
  // Utiliza la constante pi y la función pow para calcular el área
  return pi() * pow($radio, 2); 
}
`}</Code>
          </AcordeonItem>
        </Acordeon>
      </Content>
    </>
  );
}

export default Structure;
