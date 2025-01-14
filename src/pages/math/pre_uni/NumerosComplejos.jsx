import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function NumerosComplejos() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Números complejos"
      keywords="Matemática, Números complejos"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Representación de números complejos">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Operaciones básicas: suma, resta, multiplicación y división">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Forma polar de los números complejos">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default NumerosComplejos;
