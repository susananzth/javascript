import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function DataTypes() {
  return (
    <Content
      mainTitle="Fundamentos"
      articleTitle="Tipo de datos"
      keywords="Fundamentos de programación, Tipos de datos, Data types, Programación básica, Principios de programación"
      date="26/11/2024"
    >
      <Acordeon>
        <AcordeonItem title="Boolean" style="rounded-b-xl">
        <code className="font-mono text-indigo-700">Boolean</code>: Los 
          tipos de datos booleanos consisten en representar la lógica binaria, únicamente dos valores 1 y 0. 
            Esta representación binaria puede ser verdadero (`1`) y falso (`0`), 
            o true y false.
        </AcordeonItem>
        <AcordeonItem title="Strings" style="rounded-b-xl">
          <p>Contenido de strings</p>
        </AcordeonItem>
        <AcordeonItem title="Arrays">
          <h4 className="font-bold">Arrays simples, indexados o listas</h4>
          <p>
            Listas ordenadas de elementos, pueden contener cualquier tipo de
            dato. Se acceden por su posición. En{" "}
            <code className="font-mono text-indigo-700">PHP</code> se llaman
            indexados porque son numerados automáticamente o explícitamente.
          </p>
          <code className="font-mono text-indigo-700">PHP</code>:
<Code language="php">{`$numeros = [10, 20, 30, 40, 50];
$frutas = ["mango", "cambur", "parchita", "lechoza"];
$familia = ["guayaba", "pimentón", "níspero", 100, {"familia" => "Myrtaceae"}];`}</Code>
          <code className="font-mono text-indigo-700">Javascript</code>:
<Code>{`const numeros = [10, 20, 30, 40, 50];
const frutas = ["mango", "cambur", "parchita", "lechoza"];
const familia = ["guayaba", "pimentón", "níspero", 100, {"familia": "Myrtaceae"}];`}</Code>
          <code className="font-mono text-indigo-700">Python</code>:
<Code language="python">{`numeros = [10, 20, 30, 40, 50]
frutas = ["mango", "cambur", "parchita", "lechoza"]
familia = ["guayaba", "pimentón", "níspero", 100, {"familia": "Myrtaceae"}]`}</Code>
          <h4 className="font-bold mt-4">Arrays asociativos o disccionarios</h4>
          <p>Arrays con claves nombradas (tipo diccionario).</p>
          <code className="font-mono text-indigo-700">PHP</code>:
<Code language="php">{`$persona = ["nombre" => "Susana", "edad" => 35, "ocupación" => "Programadora"];`}</Code>
          <code className="font-mono text-indigo-700">Javascript</code>:
<Code>{`const persona = {nombre: "Susana", edad: 35, "ocupación": "Programadora"};`}</Code>
          <code className="font-mono text-indigo-700">Python</code>:
<Code language="python">{`persona = {"nombre": "Susana", "edad": 35, "ocupación": "Programadora"}`}</Code>
        </AcordeonItem>
        <AcordeonItem title="Objetos">
          <p>Contenido de objetos</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default DataTypes;
