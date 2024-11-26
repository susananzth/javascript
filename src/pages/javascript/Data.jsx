import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function DataJS() {
  return (
    <Content
      mainTitle="Javascript"
      articleTitle="Comentatios y Tipos de Datos"
      keywords="Javascript, Programación básica, Principios de programación"
      date="18/10/2024"
    >
      <h4 className="text-lg font-medium">Dato</h4>
      <p>
        Un dato es un valor que puede ser procesado por un programa. Ejemplos
        incluyen números, texto y booleanos.
      </p>

      <h4 className="text-lg font-medium">Información</h4>
      <p>
        La información es el resultado de procesar y organizar datos para que
        sean útiles y significativos.
      </p>

      <h4 className="text-lg font-medium">Variable</h4>
      <p>
        Una variable es un contenedor que almacena datos. Puedes cambiar el
        valor de una variable y usarlo en tu programa.
      </p>

      <h4 className="text-lg font-medium">Tipos de Variables</h4>
      <Acordeon>
        <AcordeonItem title="var">
          <p>
            Declaración más antigua, tiene un alcance global o de función. Puede
            ser redeclarada y actualizada.
          </p>
          <p>Declaración de la variable</p>
<Code>{`var nameVar `}</Code>
          <p>Asignación de la variable</p>
<Code>{`nameVar = "soy var"`}</Code>
          <p>Redeclaración de la variable</p>
<Code>{`var nameVar = "var soy" `}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameVar = "otro var"
console.log(nameVar) // otro var'`}</Code>
        </AcordeonItem>

        <AcordeonItem title="let">
          <p>
            Tiene un alcance de bloque, lo que significa que solo existe dentro
            del bloque donde se define. Puede ser actualizada, pero no
            redeclarada en el mismo alcance.
          </p>
          <p>Declaración de la variable</p>
<Code>{`let nameLet`}</Code>
          <p>Asignación de la variable</p>
<Code>{`nameLet = "soy let"`}</Code>
          <p>Redeclaración de la variable</p>
<Code>{`let nameLet = "let soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameLet' has already been declared.`}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameLet = "otro let"
console.log(nameLet) // otro let'`}</Code>
        </AcordeonItem>

        <AcordeonItem title="const" style="rounded-b-xl">
          <p>
            También tiene un alcance de bloque. Su valor no puede ser cambiado
            una vez asignado, ni puede ser redeclarada.
          </p>
          <p>Declaración y asignación de la variable</p>
<Code>{`const nameConst = "soy const"`}</Code>
          <p>Redeclaración de la variable</p>
<Code>{`const nameConst = "const soy"
// Mostrará un error:
// SyntaxError: Identifier 'nameConst' has already been declared.`}</Code>
          <p>Reasignación de la variable</p>
<Code>{`nameConst = "otro const"
//TypeError: Assignment to constant variable.`}</Code>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default DataJS;
