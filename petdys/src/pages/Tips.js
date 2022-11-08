import React from 'react'
import './Pages.css'
import SegundoComponente from '../components/SegundoComponente'
import tips  from './Imagenes/tips.png'
import Tip1 from './Imagenes/Tip1.png'
import Tip2 from './Imagenes/Tip2.png'
export default function Tips() {
  return (
   <header>

    <div class="Log">
    <img className='Logoimg' src={tips} alt="Logoimg" />
    </div>
     
     <h1 id="Titulo">
      TIPS
     </h1>

     <div>
     <SegundoComponente/>
     </div>
     <nav class="Contenido">
     <div className='Tip1'>
     <img  src={Tip1} alt="Tip1" />
      <br/>
     </div>

     <div>
     <img  src={Tip2} alt="Tip2" />
     </div>
     </nav>
     
   </header>
  )
}
