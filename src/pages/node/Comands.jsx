import React from "react";
import Code from "@components/Code";
import Content from "@components/Content";
import ImgExample from "@components/ImgExample";
import imgConsola from "@img/node-consola-interactiva.png";
import imgVersion from "@img/node-version.png";

function NodeComands() {
  return (
    <>
      <Content
        mainTitle="Node"
        articleTitle="Comandos"
        keywords="Node, Programación básica, Principios de programación"
        date="28/11/2024"
      >
        <ol className="list-disc *:ms-5 *:pt-2">
          <li>
            <h4 className="inline font-bold">Mostrar manual</h4>
            <p>Para desplegar la ayuda de <code className="font-mono text-indigo-700">Node</code> y 
            que muestre todos los comandos disponibles:</p>
            <Code language="bash">{`node -h`}</Code>
          </li>
          <li>
            <h4 className="inline font-bold">Conocer versión</h4>
            <div className="md:flex md:items-start gap-4">
              <div className="md:flex-1">
                <Code language="bash">{`node -v`}</Code>
              </div>
              <ImgExample style="flex-none my-1" src={imgVersion} alt="Mostrar versión de node" />
            </div>
          </li>
          <li>
            <h4 className="inline font-bold">Abrir y cerrar cosola interactiva</h4>
            <p>Para poder probar código de <code className="font-mono text-indigo-700">node</code> directamente 
            en la terminal de Windows, Linux o Mac, se puede abrir la consola de node:</p>
            <div className="md:flex md:items-start gap-4">
              <div className="md:flex-1">
                <Code language="bash">{`node`}</Code>
                <p>Para cerrar la consola:</p>
                <Code language="bash">{`.exit`}</Code>
              </div>
              <ImgExample src={imgConsola} alt="Abrir y cerrar consola de node" />
            </div>
          </li>
        </ol>
      </Content>
    </>
  );
}

export default NodeComands;
