import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faPhp, faPython, faRaspberryPi, faDatabase, faReact } from '@fortawesome/free-brands-svg-icons'

function Logos() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Encontrarás una amplia variedad de recursos, ejemplos y tutoriales relacionados con los siguientes lenguajes de programación
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2 max-h-12 w-full text-center object-contain lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faHtml5} />
            </div>
            <div className="col-span-2 max-h-12 w-full text-center object-contain lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faCss3Alt} />
            </div>
            <div className="col-span-2 max-h-12 w-full text-center object-contain lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faJs} />
            </div>
            <div className="col-span-2 max-h-12 w-full text-center object-contain lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faReact} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faPhp} />
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faPython} />
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faRaspberryPi} />
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1">
              <FontAwesomeIcon className="text-5xl" icon={faDatabase} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logos