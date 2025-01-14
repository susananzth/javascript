import React from "react";
import { Link } from "react-router-dom";

function MathPreUni() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Documentación y anotaciones
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Repaso de Matemática de Bachillerato
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anotaciones de cursos y tutoriales de Matemática de Bachillerato, pre universitario.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-xl font-semibold leading-7">Índice</h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <Link
                  to="/math/pre_uni/aritmetica"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Aritmética básica
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/algebra"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Álgebra básica
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/geometria"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Geometría plana
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/trigonometria"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Trigonometría básica
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/geometria_analitica"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Geometría analítica
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/algebra_intermedia"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Álgebra intermedia
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/numeros_complejos"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Números complejos
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/logaritmos_exponentes"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Logaritmos y exponentes
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/introduccion_calculo"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Introducción al cálculo
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/estadistica"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Estadística y probabilidad básicas
                </Link>
              </li>
              <li>
                <Link
                  to="/math/pre_uni/matematicas_discretas"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Matemáticas discretas (iniciales)
                </Link>
              </li>
            </ol>
            <h2 className="text-xl font-semibold leading-7 mt-5">
              Referencias
            </h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <a
                  href="https://chatgpt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Chat GPT
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default MathPreUni;
