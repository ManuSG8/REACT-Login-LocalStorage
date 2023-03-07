import React, { useState } from 'react'
import { Menu } from './Menu'

export const Login = () => {

  const comprobarSesion = () => {
    let sesion = JSON.parse(localStorage.getItem('miLogin')) || false
    return sesion
  }

  const [miLogin, setLogin] = useState(comprobarSesion())
  const [usuario, setUsuario] = useState('')
  const [pass, setPass] = useState('')

  const iniciarSesion = (e) => {
    e.preventDefault()
    let txtusu = document.getElementById('txtusu').value
    let txtpas = document.getElementById('txtpas').value
    if(txtusu.length === 0 || txtpas === 0) {
      alert('Compruebe los datos faltantes')
    } else {
      if(usuario === 'admin' && pass ==='123') {
        setLogin(true)
        localStorage.setItem('miLogin', true)
        localStorage.setItem('usuario', usuario)
        document.getElementById('form_login').style.display = 'none'
      } else {
        setLogin(false)
        alert("Error de usuario y/o contraseña")
        document.getElementById('txtusu').value = ''
        document.getElementById('txtpas').value = ''
        document.getElementById('txtusu').focus()
      }
    }
  }

  return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}> 

      { miLogin === false ?

        <form id="form_login">
            <div>
                <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
                <label htmlFor="txtusu"><strong>Username</strong></label>
                <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e) => setUsuario(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="txtpas"><strong>Password</strong></label>
                <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e) => setPass(e.target.value)} required/>
            </div><br/>
            <input type="submit" className="btn btn-primary" value="Login" onClick={iniciarSesion}/>
        </form>

      : <Menu /> }

    </div>

  )
}