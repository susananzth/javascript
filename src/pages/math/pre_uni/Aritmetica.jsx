import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function Aritmetica() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Aritmética básica"
      keywords="Matemática, Aritmética"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Operaciones básicas: suma, resta, multiplicación, división">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Propiedades de las operaciones: asociativa, conmutativa, distributiva">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Mínimo común múltiplo (MCM) y máximo común divisor (MCD)">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Fracciones: simplificación, suma, resta, multiplicación y división">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Números decimales y su conversión a fracciones">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Potencias y raíces (cuadradas, cúbicas)">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default Aritmetica;
