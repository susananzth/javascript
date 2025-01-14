import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function AlgebraIntermedia() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Álgebra intermedia"
      keywords="Matemática, Álgebra"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Ecuaciones cuadráticas: formas de resolución (fórmula general, factorización)">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Sistemas de ecuaciones lineales en dos variables">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Funciones: concepto, dominio, rango y graficación">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Operaciones con funciones: suma, resta, multiplicación, división y composición">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Función lineal, cuadrática y valor absoluto">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default AlgebraIntermedia;
