import React from 'react'
import {Link } from "react-router-dom";
import Logo from './Imagenes/Logo.png'
export const PrimerComponente = () => {
  return (
    <header className='header' id='barra1' >
       <nav class="navbar bg-light">
            <div class="container-fluid">
                <img className='Logo' src={Logo} alt="Logo" /> 
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
       


    </header>
  )
}
