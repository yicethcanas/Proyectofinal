import React from 'react'
import './Pages.css'
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
     <div class="Log">
     <img className='Logoimg' src={accesorios} alt="Logoimg" />
     </div>
      <h1 id="Titulo">ACCESORIOS</h1>
     <div>
     <SegundoComponente/>
     </div>
     <nav class="Contenido">
        <div className='CorreaPerro' id='cajitas'>
        <img  src={CorreaPerro} alt="CorreaPerro" id='imagenes'/>

        <p>
          Hermosa correa para tu mascota (perro)
          <br/>
          Diferentes colores, excelente calidad, ideal para tu mascota.
          <br/>
          $15.000
        </p>
        </div>
        
        <div className='CadenaPerro' id='cajitas'>
        <img  src={CadenaPerro} alt="CadenaPerro" id='imagenes' />

        <p>
          Hermosa Cadena para tu hermoso hijo (ideales para perros)
          <br/>
          Además que le vas a brindar el mejor estilo a tu mascota,
          se ve lujoso y hermoso!
          <br/>
          $25.000
        </p>
        </div>


        <div className='HuesoBusoCorrea' id='cajitas'>
        <img  src={HuesoBusoCorrea} alt="HuesoBusoCorrea" id='imagenes'/>

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

        <div className='ArdillaGato' id='cajitas'>
        <img  src={ArdillaGato} alt="ArdillaGato" id='imagenes'/>

        <p>
          Ardilla para tu mascota!
          <br/>
          Peluche ideal para que tu mascota! <br/>
          $5.000
        </p>
        </div>

        <div className='CamaMascota' id='cajitas'>
        <img  src={CamaMascota} alt="CamaMascota" id='imagenes'/>

        <p>
          Cama portatil para tu mascota! <br/>
          $40.000    
          </p>

        </div>


        <div className='Guacal' id='cajitas'>
        <img  src={Guacal} alt="Guacal" id='imagenes' />

        <p>
          Guacal para transportar tu mascota <br/>
          Ideal para llevar tu mascota a los viajes, con una buena amplito
          y comoda! <br/>
          $60.000
        </p>
        </div>

        <div className='JuegoGatos' id='cajitas'>
        <img  src={JuegoGatos} alt="JuegoGatos" id='imagenes' />

        <p>
          Juego para tu gato <br/>
          $7.000
        </p>
        </div>

        <div className='GafasGato' id='cajitas'>
        <img  src={GafasGato} alt="GafasGato" id='imagenes' />

        <p>
          Gafas para tu gato con mucho estilo! <br/>
          Tu mascota va a tener el estilo mas unico de todos sus amigos! <br/>
          $10.000
        </p>

        </div>

        <div className='GymGato' id='cajitas'>
        <img  src={GymGato} alt="GymGato" id='imagenes' />

        <p>
          Gym para tu mascota! <br/>
          Disfrutaria de un espacio especialmente para él <br/>
          $50.000
        </p>
        </div>

        <div className='CollarGato' id='cajitas'>
        <img  src={CollarGato} alt="CollarGato" id='imagenes' />
        <p>
          Collar para pasear tu gato! <br/>
          siempre saca a tu mascota con el mejor estilo <br/>
          $15.000
        </p>
        </div>

        <div className='Coca' id='cajitas'>
            
            <img  src={Coca} alt="Coca" id='imagenes'/>

            <p>
              La mejor coca para tu mascota! <br/>
              $10.000
            </p>
            
        </div>
     </nav>
   </header>
   
   
  )
}
