import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function LogaritmosExponentes() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Logaritmos y exponentes"
      keywords="Matemática, Logaritmos y exponentes"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Propiedades de los exponentes">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Propiedades de los logaritmos">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Conversión entre formas exponenciales y logarítmicas">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Resolución de ecuaciones exponenciales y logarítmicas">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default LogaritmosExponentes;
