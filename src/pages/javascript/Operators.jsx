import React from "react";
import Code from "@components/Code";
import Content from "@components/Content";

function OperatorsJS() {
  return (
    <>
      <Content
        mainTitle="Javascript"
        articleTitle="Operadores"
        keywords="Javascript, Programación básica, Principios de programación"
        date="02/12/2024"
      >
        <h4 className="text-xl font-medium pt-4">
          Operaciones, incremento y decremento
        </h4>
        <ol className="list-square *:ms-5 *:pt-2">
          <li>
            <h6 className="pt-2">Suma</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>+</kbd>:
              <Code>{`const operacion = 5 + 10;
console.log(operacion); // El resultado será 15.`}</Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Asignación compuesta con suma</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>+=</kbd>:
              <Code>{`let operacion = 1;
operacion += 5;
console.log(operacion); // El resultado será 6.`}</Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Resta</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>-</kbd>:
              <Code>{`const operacion = 12 - 6;
console.log(operacion); // El resultado será 6.`}</Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Asignacion compuesta con resta</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>-=</kbd>:
              <Code>{`let operacion = 5;
operacion -= 5;
console.log(operacion); // El resultado será 0.`}</Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Multiplicación</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>*</kbd>:
              <Code>{`const operacion = 2 * 3;
console.log(operacion); // El resultado será 6.

const producto = 2.1 * 5.2; // Multiplicación de decimales
console.log(producto); // El resultado será 10.920000000000002.`}
              </Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Asignacion compuesta con multiplicación</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>*=</kbd>:
              <Code>{`let operacion = 5;
operacion *= 2;
console.log(operacion); // El resultado será 10.`}
              </Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">División</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>/</kbd>:
              <Code>{`const operacion = 4 / 2;
console.log(operacion); // El resultado será 2.

const cociente = 9.2 / 2.1; // División de decimales
console.log(cociente); // El resultado será 4.3809523809523805.`}
              </Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Asignacion compuesta con división</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>/=</kbd>:
              <Code>{`let operacion = 10;
operacion /= 2;
console.log(operacion); // El resultado será 5.`}
              </Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Resto de división</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Se utiliza el operador <kbd>%</kbd>:
              <Code>{`const operacion = 17 % 2;
console.log(operacion); // El resultado será 1.`}
              </Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Incremento</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Para incrementar el valor de una variable se puede hacer de dor
              formas: Para imcrementar de 1 en 1, se utiliza el operador{" "}
              <kbd>++</kbd>:
              <Code>{`let miVar = 5;
miVar++;
console.log(miVar); // El resultado será 6.`}
              </Code>
              Para imcrementar de n en n, se utiliza el operador <kbd>+n</kbd>:
              <Code>{`let miVar = 5;
miVar+3;
console.log(miVar); // El resultado será 8.`}
              </Code>
            </div>
          </li>
          <li>
            <h6 className="pt-2">Decremento</h6>
            <div className="border border-primary rounded pt-2 px-3">
              Para restar el valor de una variable se puede hacer de dor formas:
              Para restar de 1 en 1, se utiliza el operador <kbd>--</kbd>:
              <Code>{`let miVar = 5;
miVar--;
console.log(miVar); // El resultado será 4.`}
              </Code>
              Para restar de n en n, se utiliza el operador <kbd>-n</kbd>:
              <Code>{`let miVar = 5;
miVar-2;
console.log(miVar); // El resultado será 3.`}
              </Code>
            </div>
          </li>
        </ol>
      </Content>
    </>
  );
}

export default OperatorsJS;
