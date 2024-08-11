import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <div id="feature" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Principales contenido de documentación
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Documentación más amplia de cursos y bootcamps de fundamentos de
            programación y programación web.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <Link to="/fundamentos" className="hover:underline">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon
                      className="text-2xl text-white"
                      icon={faCode}
                    />
                  </div>
                  Fundamentos de programación
                </Link>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Son los conceptos y principios básicos que forman la base de
                cualquier lenguaje de programación. Estos incluyen estructuras
                de control, tipos de datos, funciones, variables y algoritmos.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <Link to="/javascript" className="hover:underline">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon
                      className="text-2xl text-white"
                      icon={faHtml5}
                    />
                  </div>
                  HTML 5
                </Link>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                El Lenguaje de Marcado de Hipertexto (HTML) es el código que se
                utiliza para estructurar y desplegar una página web y sus
                contenidos.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <Link to="/javascript" className="hover:underline">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon
                      className="text-2xl text-white"
                      icon={faJs}
                    />
                  </div>
                  Javascript
                </Link>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                JavaScript es el lenguaje de programación que debes usar para
                añadir características interactivas a tu sitio web.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <Link to="/php" className="hover:underline">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon
                      className="text-2xl text-white"
                      icon={faPhp}
                    />
                  </div>
                  PHP
                </Link>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                PHP (acrónimo recursivo de PHP: Hypertext Preprocessor ) es un
                lenguaje de código abierto muy popular especialmente adecuado
                para el desarrollo web y que puede ser incrustado en HTML.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
