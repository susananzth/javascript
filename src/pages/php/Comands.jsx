import React from "react";
import Code from "@components/Code";
import Content from "@components/Content";

function Comands() {
  return (
    <>
      <Content
        mainTitle="PHP"
        articleTitle="Comandos"
        keywords="PHP, Programación básica, Principios de programación"
        date="27/11/2024"
      >
        <ol className="list-disc list-inside">
          <li>
            <h4 className="inline font-bold">Mostrar manual</h4>
            <p>Para desplegar la ayuda de <code className="font-mono text-indigo-700">php</code> y 
            que muestre todos los comandos disponibles:</p>
            <Code language="bash">{`php -h`}</Code>
          </li>
          <li>
            <h4 className="inline font-bold">Conocer versión</h4>
            <Code language="bash">{`php -v`}</Code>
          </li>
          <li>
            <h4 className="inline font-bold">Ejecutar servidor</h4>
            <p>Para desplegar servidor de <code className="font-mono text-indigo-700">php</code> y 
            indicando la ruta y puerto:</p>
            <Code language="bash">{`php -S localhost:8888`}</Code>
          </li>
        </ol>
      </Content>
    </>
  );
}

export default Comands;
