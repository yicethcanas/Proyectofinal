import React from 'react'
import SegundoComponente from '../components/SegundoComponente'
import tips  from './Imagenes/tips.png'
import Tip1 from './Imagenes/Tip1.png'
import Tip2 from './Imagenes/Tip2.png'
export default function Tips() {
  return (
   <header>
     <img className='Tips' src={tips} alt="tips" />
     <h1>
      TIPS
     </h1>

     <div>
     <SegundoComponente/>
     </div>

     <div className='Tip1'>
     <img  src={Tip1} alt="Tip1" />
      <br/>
     </div>

     <div>
     <img  src={Tip2} alt="Tip2" />
     </div>
   </header>
  )
}
