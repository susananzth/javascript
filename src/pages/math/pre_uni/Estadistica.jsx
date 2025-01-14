import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function Estadistica() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Estadística y probabilidad básicas"
      keywords="Matemática, Estadística, Probabilidad"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Conceptos básicos: promedio, mediana, moda">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Representación de datos: tablas y gráficos">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Conceptos básicos de probabilidad: eventos, espacio muestral, probabilidad clásica">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default Estadistica;
