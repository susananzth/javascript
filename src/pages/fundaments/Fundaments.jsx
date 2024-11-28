import React from "react";
import { Link } from "react-router-dom";

function Fundaments() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Documentación y anotaciones
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fundamentos de programación
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Todas las anotaciones de cursos y tutoriales de fundamentos de
              programación.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-xl font-semibold leading-7">Índice</h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <Link
                  to="/fundamentos"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Fundamentos
                </Link>
              </li>
              <li>
                <Link
                  to="/fundamentos/tipos_datos"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Tipos de datos
                </Link>
              </li>
              <li>
                <Link
                  to="/fundamentos/estructura_datos"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Estructura de datos
                </Link>
              </li>
            </ol>
            <h2 className="text-xl font-semibold leading-7 mt-5">
              Referencias
            </h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <a
                  href="https://www.susananzth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Susana Piñero
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fundaments;
