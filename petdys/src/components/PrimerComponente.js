import React from 'react'
import './PrimerComponente.css'
import Logo from './Imagenes/Logo.png'
export const PrimerComponente = () => {
  return (
    <header className='header' >
       <img className='Logo' src={Logo} alt="Logo" />
       <input type="text" name="Producto"/>;
       <button type="button" class="">Botón</button>
       


    </header>
  )
}
