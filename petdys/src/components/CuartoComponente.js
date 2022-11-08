import React from 'react'
import {Link } from "react-router-dom";
import CuidoAdulto from './Imagenes/CuidoAdulto.png'
import CollarGato from './Imagenes/CollarGato.png'

import LataAdulto from './Imagenes/LataAdulto.png'
import Latacachorro from './Imagenes/Latacachorro (2).png'
import CadenaPerro  from './Imagenes/CadenaPerro.png'
import CuidoCachorroGato from './Imagenes/CuidoCachorroGato.png'
import CorreaPerro from './Imagenes/CorreaPerro.png'

import CuidoCachorro from './Imagenes/CuidoCachorro.png'


const CuartoComponente = () => {
  return (
    
  <div >
        <nav class="Contimg">
        <div >
             <Link to="/Comida"> <img className='CuidoAdulto' src={CuidoAdulto} alt="CuidoAdulto" id='img4com' /> </Link>
          </div>
          
            <div >
               <Link to="/Accesorios"><img className='CollarGato' src={CollarGato} alt="CollarGato" id='img4com'/></Link>
          </div>
          <div >
             <Link to="/Accesorios"><img className='CorreaPerro' src={CorreaPerro} alt="CorreaPerro" id='img4com' /> </Link>
          </div>
          <div >
            <Link to="/Comida"><img className='CuidoCachorroGato' src={CuidoCachorroGato} alt="CuidoCachorro" id='img4com' /> </Link>
          </div>
        </nav>
        
          
        
    

 </div>
      
    
  )
}
export default CuartoComponente