import React, { useState, useEffect } from 'react'

export const Listar = () => {

  const obtenerRegistros = () => {
    let datos = JSON.parse(localStorage.getItem('registrosLogin')) || []
    return datos
  }

  const [registrosLogin, setRegistrosLogin] = useState(obtenerRegistros())

  const botonEliminar = (miIndex) => {
    if(window.confirm('Esta seguro de querer eliminar el registro?')) {
      let registrosFiltrados = registrosLogin.filter((registro, index) => {
        return miIndex !== index
      })
      setRegistrosLogin(registrosFiltrados)
    }
  }

  useEffect(() => {
    localStorage.setItem('registrosLogin', JSON.stringify(registrosLogin))
  }, [registrosLogin])

  return (
    <div className="bg-light" style={{marginTop:20, padding:20}}>
      <div className="h3">
        Listado De Registro De Pinturas
      </div>
      <div className="table-responsive">

        { registrosLogin.length > 0 ? 
          <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
              <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                  <th>#</th>
                  <th>Titulo</th>
                  <th>Estilo</th>
                  <th>Tecnica</th>
                  <th>Precio</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody className="text-center align-baseline">
                {
                  registrosLogin.map((registro, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{registro.titulo}</td>
                      <td>{registro.estilo}</td>
                      <td>{registro.tecnica}</td>
                      <td>{registro.precio}</td>
                      <td className='text-center'>
                        <button className='btn btn-outline-danger' onClick={() => botonEliminar(index)}>
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </> 

        : <p className='h5' style={{color:'red'}}>No hay registros para listar</p> }

      </div>
    </div>

  )
}
