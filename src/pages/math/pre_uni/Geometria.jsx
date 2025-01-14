import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function Geometria() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Geometría plana"
      keywords="Matemática, Geometría"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Propiedades de líneas, ángulos y triángulos">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Triángulos notables (30°-60°-90°, 45°-45°-90°)">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Perímetros y áreas de figuras geométricas básicas: triángulos, cuadrados, rectángulos, círculos, trapecios">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Teorema de Pitágoras">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default Geometria;
