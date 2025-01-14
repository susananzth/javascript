import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function StringJS() {
  return (
    <Content
      mainTitle="Javascript"
      articleTitle="Arreglos | Array"
      keywords="Javascript, Array, Programación básica, Principios de programación"
      date="13/01/2025"
    >
      <h4 className="text-xl font-medium pt-4">Funciones de manejo de arrays</h4>
      <Acordeon>
        <AcordeonItem title=".length">
        <p>
            Se utiliza para contar los caracteres de una cadena de texto o cantidad 
            de elementos de un array.
        </p>
<Code>{`const miArray = [654, 97, 321];
console.log(miArray.length); // Mostrará: 3.`}</Code>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default StringJS;
