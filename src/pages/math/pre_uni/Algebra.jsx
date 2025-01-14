import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Content from "@components/Content";

function Algebra() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Álgebra básica"
      keywords="Matemática, Álgebra"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Expresiones algebraicas: términos, coeficientes y constantes">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Operaciones con polinomios: suma, resta, multiplicación, división">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Factorización: comunes, trinomios, diferencia de cuadrados">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Ecuaciones lineales: resolución y sistemas de ecuaciones">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Desigualdades y su representación en la recta numérica">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Propiedades de los números reales">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default Algebra;
