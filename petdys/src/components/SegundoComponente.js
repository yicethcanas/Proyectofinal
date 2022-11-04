import React from 'react'
import { Outlet, Link } from "react-router-dom";


const SegundoComponente = () => {
  return (
    <Outlet>
      <div>
       <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/"className="nav-link active" aria-current="page" >Home</Link>
        <Link to="comida" className="nav-link">Comidas</Link>
        <Link className="nav-link">Accesorios</Link>
        <Link className="nav-link">Tips</Link>
        
      </div>
    </div>
  </div>
</nav>
</div>

    </Outlet>
    
            

      
    
  )
}


export default SegundoComponente
