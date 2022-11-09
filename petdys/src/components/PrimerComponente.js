import React from 'react'
import {Link } from "react-router-dom";
import Logo from './Imagenes/Logo.png'
export const PrimerComponente = () => {
  return (
    <header className='header'  id='barra1'>
       
            <div class="container-fluid"  id='Loguito'>
  
                <img className='Logo' src={Logo} alt="Logo" /> 
            </div>
     
       <nav class="navbar navbar-expand-lg bg-light" >
        <div class="container-fluid">
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to= "/"  className="nav-link active" aria-current="page" >Home</Link>
              <Link to= "/Comida"  className="nav-link">Comidas</Link>
              <Link to="/Accesorios" className="nav-link">Accesorios</Link>
              <Link to="/Tips" className="nav-link">Tips</Link>
              
            </div>
          </div>
        </div>
      </nav>



       


    </header>
  )
}
