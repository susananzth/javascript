import React from "react";
import { Link } from "react-router-dom";

function SQL() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Documentación y anotaciones
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SQL
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Todas las anotaciones de cursos y tutoriales de SQL.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-xl font-semibold leading-7">Índice</h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <Link
                  to="/sql/definiciones"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  Definiciones
                </Link>
              </li>
            </ol>
            <h2 className="text-xl font-semibold leading-7 mt-5">
              Referencias
            </h2>
            <ol className="list-disc *:ms-5 *:pt-2">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=iOiyJgnN71c&list=PLU8oAlHdN5Bmx-LChV4K3MbHrpZKefNwn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline decoration-indigo-700"
                >
                  SQL | PildorasInformaticas
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default SQL;
