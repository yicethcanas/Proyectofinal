import React from 'react'
import './CuartoComponente.css'
import CuidoAdulto from './Imagenes/CuidoAdulto.png'
import LataAdulto from './Imagenes/LataAdulto.png'
import Latacachorro from './Imagenes/Latacachorro (2).png'
import CuidoCachorro from './Imagenes/CuidoCachorro.png'

const CuartoComponente = () => {
  return (
    
        <div>
            <div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 border bg-light"> <img className='CuidoAdulto' src={CuidoAdulto} alt="CuidoAdulto" /> </div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light"><img className='LataAdulto' src={LataAdulto} alt="LataAdulto" /></div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light"><img className='Latacachorro' src={Latacachorro} alt="Latacachorro" /></div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light"><img className='CuidoCachorro' src={CuidoCachorro} alt="CuidoCachorro" /></div>
    </div>
  </div>
</div>

        </div>
      
    
  )
}
export default CuartoComponente