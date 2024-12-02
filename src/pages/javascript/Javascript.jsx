import React from "react";
import { Link } from "react-router-dom";

function Javascript() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Documentación y anotaciones
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Javascript
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Todas las anotaciones de cursos y tutoriales de Javascript.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-xl font-semibold leading-7">Índice</h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <Link
                  to="/javascript/tipos_datos"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Tipos de datos
                </Link>
              </li>
              <li>
                <Link
                  to="/javascript/variable"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Variables
                </Link>
              </li>
              <li>
                <Link
                  to="/javascript/operadores"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Operadores
                </Link>
              </li>
            </ol>
            <h2 className="text-xl font-semibold leading-7 mt-5">
              Proyectos
            </h2>
            <ol>
              <li>
                <a
                  href="https://github.com/susananzth?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  FreeCodeCamp | Javascript Algorithms And Data Structures
                </a>
              </li>
            </ol>
            <h2 className="text-xl font-semibold leading-7 mt-5">
              Referencias
            </h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <a
                  href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  <span className="badge text-bg-info">12/2024</span> FreeCodeCamp
                </a>
              </li>
              <li>
                <a href="https://platzi.com/cursos/ecmascript-6/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline decoration-indigo-700"
                  >
                    <span className="badge text-bg-info">09/2023</span> Curso de ECMAScript: Historia y Versiones de JavaScript | Platzi
                </a>
              </li>
              <li>
                <a href="https://platzi.com/cursos/basico-javascript/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline decoration-indigo-700"
                  >
                    <span className="badge text-bg-info">09/2023</span> Curso básico de Javascript | Platzi
                </a>
              </li>
              <li>
                <a href="https://platzi.com/cursos/pensamiento-logico-estructuras/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline decoration-indigo-700"
                  >
                    <span className="badge text-bg-info">09/2023</span> Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones | Platzi
                </a>
              </li>
              <li>
                <a
                  href="https://www.chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  GPT4
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Javascript;
