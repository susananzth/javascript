import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function Variable() {
  return (
    <>
      <Content
        mainTitle="PHP"
        articleTitle="Varibles"
        keywords="PHP, Programación básica, Principios de programación"
        date="27/11/2024"
      >
        <Acordeon>
          <AcordeonItem title="título" style="rounded-b-xl">
            <h4 className="font-bold">Título</h4>
            <p>Contenido</p>
            <code className="font-mono text-indigo-700">Code</code>
            <Code language="php">{`Code`}</Code>
            <h4 className="font-bold">Título</h4>
            <p>Contenido</p>
          </AcordeonItem>
          <AcordeonItem title="título2" style="rounded-b-xl">
            <h4 className="font-bold">Título</h4>
            <p>Contenido</p>
            <code className="font-mono text-indigo-700">Code</code>
            <Code language="php">{`Code`}</Code>
            <h4 className="font-bold">Título</h4>
            <p>Contenido</p>
          </AcordeonItem>
        </Acordeon>
      </Content>
    </>
  );
}

export default Variable;
