import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Acordeon from '@components/Acordeon'
import AcordeonItem from '@components/AcordeonItem'

function PHP() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Aprendizaje de PHP
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Todas las anotaciones de cursos y tutoriales de php
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon className="h-6 w-6 text-white" icon={faCircleCheck} />
                  </div>
                  <Link to="/php/variable">Variables</Link>
                </dt>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon className="h-6 w-6 text-white" icon={faCircleCheck} />
                  </div>
                  <Link to="/php/variable">Variables</Link>
                </dt>
              </div>
            </dl>
          </div>

            <Acordeon>
              <AcordeonItem title="Primer título">
                <p>Contenido del primer ítem del acordeón</p>
              </AcordeonItem>
              <AcordeonItem title="Segundo título">
                <p>Contenido del segundo ítem del acordeón</p>
              </AcordeonItem>
              <AcordeonItem title="Tercer título" style="rounded-b-xl">
                <p>Contenido del tercer ítem del acordeón</p>
              </AcordeonItem>
            </Acordeon>

        </div>
      </div>
    </>
  )
}

export default PHP