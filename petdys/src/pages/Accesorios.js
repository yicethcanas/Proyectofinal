import React from 'react'
import SegundoComponente from '../components/SegundoComponente'
import accesorios  from './Imagenes/accesorios.png'
import CorreaPerro from './Imagenes/CorreaPerro.png' 
import CadenaPerro  from './Imagenes/CadenaPerro.png'
import HuesoBusoCorrea from './Imagenes/HuesoBusoCorrea.png'
import ArdillaGato from './Imagenes/ArdillaGato.png'
import CamaMascota from './Imagenes/CamaMascota.png'
import Guacal from './Imagenes/Guacal.png'
import JuegoGatos from './Imagenes/JuegoGatos.png'
import GafasGato from './Imagenes/GafasGato.png'
import GymGato from './Imagenes/GymGato.png'
import CollarGato from './Imagenes/CollarGato.png'
import Coca from './Imagenes/Coca.png'

export default function Accesorios() {
  return (
   <header>
  <img className='accesorios' src={accesorios} alt="accesorios" />

  <h1>ACCESORIOS</h1>
     <div>
     <SegundoComponente/>
     </div>

     <div className='CorreaPerro'>
     <img  src={CorreaPerro} alt="CorreaPerro" />

     <p>
      Hermosa correa para tu mascota (perro)
      <br/>
      Diferentes colores, excelente calidad, ideal para tu mascota.
      <br/>
      $15.000
     </p>
     </div>
     
     <div className='CadenaPerro'>
     <img  src={CadenaPerro} alt="CadenaPerro" />

     <p>
      Hermosa Cadena para tu hermoso hijo (ideales para perros)
      <br/>
      Además que le vas a brindar el mejor estilo a tu mascota,
      se ve lujoso y hermoso!
      <br/>
      $25.000
     </p>
     </div>


     <div className='HuesoBusoCorrea'>
     <img  src={HuesoBusoCorrea} alt="HuesoBusoCorrea" />

     <p>
      Hueso para tu mascota <br/>
      Ideal para que tu mascota libere todo su estrés <br/>
      $5.000 <br/> <br/>
      Buso para tu mascota <br/>
      Ideal buso con chompa para tu mascota, especial para dias frios! <br/>
      $25.000 <br/> <br/>
      Correa especial para tu mascota <br/>
      Ideal para sacar a pasear tu mascota <br/>
      $20.000
     </p>
     </div>

     <div className='ArdillaGato'>
     <img  src={ArdillaGato} alt="ArdillaGato" />

     <p>
      Ardilla para tu mascota!
      <br/>
      Peluche ideal para que tu mascota! <br/>
      $5.000
     </p>
     </div>

     <div className='CamaMascota'>
     <img  src={CamaMascota} alt="CamaMascota" />

     <p>
      Cama portatil para tu mascota! <br/>
      $40.000    
       </p>

     </div>


     <div className='Guacal'>
     <img  src={Guacal} alt="Guacal" />

     <p>
      Guacal para transportar tu mascota <br/>
      Ideal para llevar tu mascota a los viajes, con una buena amplito
      y comoda! <br/>
      $60.000
     </p>
     </div>

     <div className='JuegoGatos'>
     <img  src={JuegoGatos} alt="JuegoGatos" />

     <p>
      Juego para tu gato <br/>
      $7.000
     </p>
     </div>

     <div className='GafasGato'>
     <img  src={GafasGato} alt="GafasGato" />

     <p>
      Gafas para tu gato con mucho estilo! <br/>
      Tu mascota va a tener el estilo mas unico de todos sus amigos! <br/>
      $10.000
     </p>

     </div>

     <div className='GymGato'>
     <img  src={GymGato} alt="GymGato" />

     <p>
      Gym para tu mascota! <br/>
      Disfrutaria de un espacio especialmente para él <br/>
      $50.000
     </p>
     </div>

     <div className='CollarGato'>
     <img  src={CollarGato} alt="CollarGato" />
     <p>
      Collar para pasear tu gato! <br/>
      siempre saca a tu mascota con el mejor estilo <br/>
      $15.000
     </p>
     </div>

     <div className='Coca'>
        
        <img  src={Coca} alt="Coca" />

        <p>
          La mejor coca para tu mascota! <br/>
          $10.000
        </p>
        
     </div>
   </header>
   
   
  )
}
