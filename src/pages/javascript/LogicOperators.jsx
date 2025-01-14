import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function LogicOperatorsJS() {
  return (
    <>
      <Content
        mainTitle="Javascript"
        articleTitle="Operadores lógicos y de comparación"
        keywords="Javascript, Programación básica, Principios de programación"
        date="13/01/2025"
      >
        <h4 className="text-xl font-medium pt-4">
          Operaciones, incremento y decremento
        </h4>
        <Acordeon>
          <AcordeonItem title="Operadores de igualdad">
            <h4 className="font-bold">Operadores de igualdad</h4>
            <p>
              El operador de igualdad <kbd>==</kbd> compara 
              dos valores y devuelve true (si) son equivalentes o false (no).
            </p>
<Code>{`1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true`}</Code>
          </AcordeonItem>
        </Acordeon>
      </Content>
    </>
  );
}

export default LogicOperatorsJS;
