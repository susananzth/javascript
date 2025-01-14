import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function GeometriaAnalitica() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Geometría analítica"
      keywords="Matemática, Geometría"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Sistema de coordenadas cartesianas">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Ecuación de la recta: pendiente, intersección con los ejes">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Distancia entre dos puntos en el plano">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Punto medio de un segmento">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Ecuación de la circunferencia">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default GeometriaAnalitica;
