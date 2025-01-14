import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function Trigonometria() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Trigonometría básica"
      keywords="Matemática, Trigonometría"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Conceptos fundamentales: seno, coseno, tangente">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Relación entre las razones trigonométricas">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Cálculo de razones trigonométricas en triángulos rectángulos">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Uso de la calculadora científica para funciones trigonométricas">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default Trigonometria;
