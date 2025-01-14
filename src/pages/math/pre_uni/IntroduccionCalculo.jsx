import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function IntroduccionCalculo() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Introducción al cálculo"
      keywords="Matemática, Cálculo, Introducción al cálculo"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Concepto de límite y su interpretación gráfica">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Límites de funciones básicas">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Continuidad de una función">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Derivadas: noción básica y reglas iniciales">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Aplicaciones de las derivadas: velocidad, pendiente de una curva">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default IntroduccionCalculo;
