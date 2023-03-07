import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Registrar } from './Registrar'
import { Listar } from './Listar'
import { Estadistica } from './Estadistica'

export const Menu = () => {

  const [usuario] = useState(localStorage.getItem('usuario')) 

  const [reg, setReg] = useState('')
  const [list, setList] = useState('')
  const [stat, setStat] = useState('')

  const cerrarSesion = () => {
    localStorage.removeItem('miLogin')
    localStorage.removeItem('usuario')
    document.getElementById('caja_menu').style.display = 'none'
    document.getElementById('form_login').style.display = 'block'
    document.getElementById('txtusu').value = ''
    document.getElementById('txtpas').value = ''
    document.getElementById('txtusu').focus()
  }

  const op_registrar = () => {
    setReg('1')
    setList('0')
    setStat('0')
  }

  const op_listar = () => {
    setReg('0')
    setList('1')
    setStat('0')
  }

  const op_estadistica = () => {
    setReg('0')
    setList('0')
    setStat('1')
  }

  return (
    <> 
      <div id="caja_menu" style={{textAlign:"left"}}>
        <strong className="h3">
          Bienvenido Usuario : {usuario.toUpperCase()}
        </strong>  
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
          <div className="container-fluid">
            <label className="navbar-brand  h5" href=" ">Menú Principal</label>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link  h5  text-center" onClick={op_registrar} >Registrar</NavLink>
                <NavLink to="" className="nav-link  h5  text-center" onClick={op_listar} >Listar</NavLink>
                <NavLink to="" className="nav-link  h5  text-center" onClick={op_estadistica} >Estadistica</NavLink>
                <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href=" " onClick={cerrarSesion}  >Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      { reg === '1' && <Registrar /> }
      { list === '1' && <Listar /> }
      { stat === '1' && <Estadistica /> }

    </>
  )
}
