import React from 'react'
import Ayuda from './Imagenes/Ayuda.png'
import MetodosdePago from './Imagenes/MetodosdePago.png'

export const QuintoComponente = () => {
  return (
    <div >
      <nav className='Quintocomponente'>
      <div className='cja'>
      <img className='Ayuda' src={Ayuda} alt="Ayuda"  />

      <p>
        hefwiuhnjkshnkjdfhnkjldasfhgkhfdnkjgvnhrkjlhgkjfdkjg
        dfiojdfiogfadjsojvojfiojgijdfpoafkfd
        
      </p>
      
      </div>
     
      <div className='cja'>
      <img className='MetodosPago' src={MetodosdePago} alt="MetodosdePago"  />
      </div>
      </nav>
      
      
    </div>
    
  )
}
