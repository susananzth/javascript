import React from "react";
import Acordeon from "@components/Acordeon";
import AcordeonItem from "@components/AcordeonItem";
import Code from "@components/Code";
import Content from "@components/Content";

function Aritmetica() {
  return (
    <Content
      mainTitle="Matemática"
      articleTitle="Aritmética básica"
      keywords="Matemática, Aritmética"
      date="14/01/2025"
    >
      <Acordeon>
        <AcordeonItem title="Operaciones básicas: suma, resta, multiplicación, división">
          <p>
            Las operaciones básicas son suma, resta, multiplicación y división. 
            Estas son las bases de toda la matemática.
          </p>
          <h4 className="text-xl font-medium pt-4">Suma (+)</h4>
          <p>La suma combina dos o más números para encontrar un total.</p>
<Code>{`5 + 7 = 12`}</Code>
          <h4 className="text-xl font-medium pt-4">Resta (-)</h4>
          <p>La resta encuentra la diferencia entre dos números.</p>
<Code>{`10 - 6 = 4`}</Code>
          <h4 className="text-xl font-medium pt-4">Multiplicación (*)</h4>
          <p>La multiplicación es una suma repetitiva.</p>
<Code>{`4 * 3 = 12 
// Sumar 4+4+4`}</Code>
          <h4 className="text-xl font-medium pt-4">División (/)</h4>
          <p>La división reparte un número en partes iguales.</p>
<Code>{`15 ÷ 3 = 5
// Significa que 15 se divide en 3
// 3 grupos de 5`}</Code>
        </AcordeonItem>
        <AcordeonItem title="Propiedades de las operaciones: asociativa, conmutativa, distributiva">
          <p>Estas propiedades son reglas que siempre se cumplen al operar.</p>
          <h4 className="text-xl font-medium pt-4">Propiedad Asociativa</h4>
          <p>El agrupamiento de los números no afecta el resultado en suma y multiplicación</p>
<Code>{`// Suma: 
(a + b) + c = a + (b + c)

// Multiplicación: 
(a * b) * c = a * (b * c)

// Ejemplo:
(2 + 3) + 4 = 2 + (3 + 4)
      5 + 4 = 2 + 7
          9 = 9`}</Code>
          <h4 className="text-xl font-medium pt-4">Propiedad Conmutativa</h4>
          <p>El orden de los números no afecta el resultado en suma y multiplicación.</p>
<Code>{`// Suma: 
a + b = b + a

// Multiplicación: 
a * b = b * a

// Ejemplo:
7 + 3 = 3 + 7
  10 = 10`}</Code>
          <h4 className="text-xl font-medium pt-4">Propiedad Distributiva</h4>
          <p>Distribuye la multiplicación sobre la suma o resta.</p>
<Code>{`a * (b + c) = a * b + a * c

// Ejemplo:
2 * (3 + 4) = (2 * 3) + (2 * 4)
      2 * 7 = 6 + 8
         14 = 14`}</Code>
        </AcordeonItem>
        <AcordeonItem title="Mínimo común múltiplo (MCM) y máximo común divisor (MCD)">
          <h4 className="text-xl font-medium pt-4">Máximo Común Divisor (MCD)</h4>
          <p>
            El Máximo Común Divisor de dos o más números es el número más grande 
            que divide exactamente a todos ellos.
          </p>
          <p className="mt-2 mb-0">Procedimiento para encontrar el MCD:</p>
          <ol className="list-disc *:ms-5 *:pt-2">
            <li>Descomposición en factores primos: Descompón cada número en sus factores primos.</li>
            <li>Identificar factores comunes: Encuentra los factores primos comunes en todas las descomposiciones.</li>
            <li>Seleccionar el menor exponente: Para cada factor primo común, elige el menor exponente presente.</li>
            <li>Multiplicar los factores seleccionados: El producto de estos factores es el MCD.</li>
          </ol>
<Code>{`// Encuentra el MCD de 36 y 48.

// Descomposición en factores primos:
36 = 2² x 3²
48 = 2⁴ x 3¹

// Factores comunes: 2 y 3
// Menores exponentes:
Para 2: 2²
Para 3: 3¹
MCD: 2² x 3¹ = 4 x 3 = 12

Respuesta: El MCD de 36 y 48 es 12.`}</Code>
          <h4 className="text-xl font-medium pt-4">Mínimo Común Múltiplo (MCM)</h4>
          <p>
            El Mínimo Común Múltiplo de dos o más números es el menor número positivo que es múltiplo de todos ellos.
          </p>
          <p className="mt-2 mb-0">Procedimiento para encontrar el MCM:</p>
          <ol className="list-disc *:ms-5 *:pt-2">
            <li>Descomposición en factores primos: Descompón cada número en sus factores primos.</li>
            <li>Identificar todos los factores: Considera todos los factores primos presentes en las descomposiciones.</li>
            <li>Seleccionar el mayor exponente: Para cada factor primo, elige el mayor exponente presente.</li>
            <li>Multiplicar los factores seleccionados: El producto de estos factores es el MCM.</li>
          </ol>
<Code>{`// Encuentra el MCM de 36 y 48.

// Descomposición en factores primos:
36 = 2² x 3²
48 = 2⁴ x 3¹

// Factores comunes: 2 y 3
// Menores exponentes:
Para 2: 2⁴
Para 3: 3²
MCM: 2⁴ x 3² = 16 x 9 = 144

Respuesta: El MCM de 36 y 48 es 144.`}</Code>
        </AcordeonItem>
        <AcordeonItem title="Fracciones: simplificación, suma, resta, multiplicación y división">
          <p>Las fracciones representan partes de un todo y se componen de un numerador 
            (parte superior) y un denominador (parte inferior).</p>
        </AcordeonItem>
        <AcordeonItem title="Números decimales y su conversión a fracciones">
          <p>Concepto</p>
        </AcordeonItem>
        <AcordeonItem title="Potencias y raíces (cuadradas, cúbicas)">
          <p>Concepto</p>
        </AcordeonItem>
      </Acordeon>
    </Content>
  );
}

export default Aritmetica;
