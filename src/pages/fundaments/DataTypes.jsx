import React from 'react'
import Acordeon from '@components/Acordeon'
import AcordeonItem from '@components/AcordeonItem'

function DataTypes() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
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
    </>
  )
}

export default DataTypes