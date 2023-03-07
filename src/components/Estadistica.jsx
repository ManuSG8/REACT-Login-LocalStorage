import React, { useState } from 'react'

export const Estadistica = () => {

  const obtenerRegistros = () => {
    let datos = JSON.parse(localStorage.getItem('registrosLogin')) || []
    return datos
  }

  const [registrosLogin] = useState(obtenerRegistros()) // No necesitamos el setRegistrosLogin

  const miEstadistica = (opcion) => {
    let resultado = 0

    if (opcion === 1) {
      resultado = registrosLogin.length
    } else if (opcion === 2) {
      for(let i = 0; i < registrosLogin.length; i++) {
        resultado += parseInt(registrosLogin[i].precio)
      }
    } else if (opcion === 3) {
      for(let i = 0; i < registrosLogin.length; i++) {
        resultado += parseInt(registrosLogin[i].precio)
      }
      resultado /= registrosLogin.length
    }
    return resultado
  }

  return (
    <div className="bg-light" style={{marginTop:20, padding:20}}>
      <div className="h3">
        Resumen Estadístico
      </div>
      <div className="table-responsive">

        { registrosLogin.length > 0 ?

          <div className="row row-cols-1 row-cols-md-3 g-2" style={{padding:5, width:"90%", margin:"0 auto"}}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cantidad de Pinturas</h5>
                  <p className="card-text"> {miEstadistica(1)} </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                <h5 className="card-title">Suma de Precios</h5>
                  <p className="card-text"> {miEstadistica(2)} </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Promedio de Precios</h5>
                  <p className="card-text"> {miEstadistica(3)} </p>
                </div>
              </div>
            </div>
          </div>

        : <p className='h5' style={{color:'red'}}>No hay registros para la estadística</p> }

      </div>
    </div>
  )
}
