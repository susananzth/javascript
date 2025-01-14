import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function MatematicasDiscretas() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Matemáticas discretas (iniciales)"
      keywords="Matemática, Matemáticas discretas"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Números enteros, divisibilidad">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Principio de inducción matemática">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Principios básicos de conteo: permutaciones y combinaciones">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Conjuntos y operaciones: unión, intersección, complemento">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default MatematicasDiscretas;
