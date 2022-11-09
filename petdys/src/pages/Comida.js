import React from 'react'
import './Pages.css'
import SegundoComponente from '../components/SegundoComponente'
import CuidoAdulto from './Imagenes/CuidoAdulto.png'
import CuidoCachorro from './Imagenes/CuidoCachorro.png'
import ComidaLogo from './Imagenes/ComidaLogo.png'
import LataAdulto from './Imagenes/LataAdulto.png'
import Latacachorro from './Imagenes/Latacachorro (2).png'
import CuidoCachorroGato from './Imagenes/CuidoCachorroGato.png'
import CuidoAdultoGato from './Imagenes/CuidoAdultoGato.png'
import LataAdultoGato from './Imagenes/LataAdultoGato.png'
import LataCachorroGato from './Imagenes/LataCachorroGato.png'

 const Comida = () => {
  return (
    <header >
        <div class="Log">
           <img className='Logoimg' src={ComidaLogo} alt="Logoimg" />
        
        </div>
        <h1 id="Titulo"> COMIDA</h1>

        <div>
        <SegundoComponente/>
        </div>
          <nav class="Contenido">
          <div className='CuidoAdulto' id='cajitas'>
          <img  src={CuidoAdulto} alt="CuidoAdulto" id='imagenes'/> 
          <br/>
          <p id='Textos'> Alimento para perros adultos croquetas Bolsa 30 kg Ringo Abrir en Información
            <br/>
              $105.590
              <br/>
              Formato Bolsa 30 kg
              <br/>
              Marca Ringo</p>
          </div>

            <div className='CuidoCachorro' id='cajitas' >
            <img  src={CuidoCachorro} alt="CuidoCachorro" id='imagenes' /> 
            <p id='Textos'>
            Alimento seco para perros cachorros Bolsa 1 kg RingoAbrir en Información
            <br/>
            $4.390
            <br/>
            Formato Bolsa 1 kg
            <br/>
            MarcaRingo
            </p>
            </div>

          <div className='LataAdulto' id='cajitas'>
          <img  src={LataAdulto} alt="LataAdulto"  id='imagenes'/> 
          <p id='Textos'>

          DOG CHOW FESTIVAL DE PAVO Y POLLO. LATA 374 G
          <br/>
          $9.900 
          <br/>
          La comida húmeda para perros enlatada de Purina Dog Chow es un alimento con un rico sabor y aroma que proporcionará nutrientes de calidad a la dieta de tu perro adulto. Son deliciosos trozos húmedos de pavo y pollo a los cuales tu perro no se resistirá, debido a su atrayente olor y sabor.
          </p>
          </div>

        <div className='Latacachorro' id='cajitas'>
        <img  src={Latacachorro} alt="LataAdulto" id='imagenes' /> 
        <p id='Textos'>
        Pedigree Lata Cachorro Carne Y Pollo 380Gr
        <br/>
        $6,500
        <br/>
        Este alimento húmedo proporcionará un nutrición completa y balanceada, es un delicioso paté o carne molida de pollo que tiene un palatal sabor y aroma irresistible.
        Es ideal para consumir solo o mezclado con el concentrado, esta cocinado al vapor y 100 % digeribles, especialmente para aquellos consentidos que les gusta poco el concentrado seco.
        Ingredientes:Carne y/o subproductos (Menudencias) de Carne y/o Ave y/o Cerdo y/o Pescado, Agua suficiente para el proceso Carne y/o Subproductos de (Menudencias) de Res, concentrados Proteicos Vegetales, Aceite Vegetal (Fuente natural de ácido Linoleico) Pulpa de Remolacha, espesantes y/o Gelificantes y/o estabilizantes, Antioxidantes, Colorantes naturales y/o artificiales. Minerales: Sales u óxidos de calcio, fosforo, potasio, Zinc, Magnesio, Yodo. Vitaminas – suplementos de Vitaminas E
          </p>
        </div >
      
          <div className='CuidoCachorroGato' id='cajitas'>
          <img  src={CuidoCachorroGato} alt="CuidoCachorroGato" id='imagenes' /> 

          <p id='Textos'>
            Mirringo 
            <br/>
          $5.000 
            <br/>
          Una buena salud se construye desde cachorros y Mirringo Gaticos 360 
          Defense es ideal para las primeras etapas de tu consentido. Es un alimento
          que cumple y satisface todos los requerimientos nutricionales de crecimiento, 
          desarrollo, mantenimiento y lactancia para gatos de todas las razas 
          ¡A ellos les encanta su sabor, olor y crocancia y a ti te encantará el Efecto Mirringo!
          </p>
          </div>
          

          <div className='CuidoAdultoGato' id='cajitas'>
          <img  src={CuidoAdultoGato} alt="CuidoAdultoGato" id='imagenes' />
          <p id='Textos'>
          Cat Chow Alimento para Gatos Adultos Delimix 10 kg
          <br/>
          $ 125.500
          </p>
          </div>

        <div className='LataAdultoGato' id='cajitas'>
        <img  src={LataAdultoGato} alt="LataAdultoGato"  id='imagenes'/>

        <p id='Textos'> Whiskas Lata Gatos Atun en salsa 290 Grs
          <br/>
              $5.200
              <br/>
              Beneficios:
              <br/>
              100% completo y balanceado.
              <br/>
              Cuidado de vías urinarias.
              <br/>
              Consistencia suave.
              <br/>
              Más derivados de la carne.
              <br/>
              No altera las heces.
              <br/>
              Ingredientes: Agua, carcasa de pollo y/o grasa de pollo y/o carne de pollo deshuesada, hígado de cerdo fresco/congelado nsc y/o hígado de pollo, menudencias de aves (patas de pollo y cabezas de pollo), menudencias bovinas (riñón), harina de trigo, fibra vegetal, plasma sanguíneo bovino en polvo y/o plasma sanguíneo porcino en polvo, glicina, hemoglobina bovina seca y/o hemoglobina porcina seca, minerales (cloruro de sodio -sal refinada ionizada-, tripolisfosfato de sodio, cloruro de potasio, sulfato de cobre, iodato de calcio, óxido de zinc, óxido de manganeso, selenito de sodio, óxido de magnesio), vitaminas (d3, e, b1, b2, b6, b12, cloruro de colina, niacina, ácido pantoténico, ácido fólico), dextrosa, taurina, polvo de xilosa, carragenina kappa, color caramelo líquido, goma xantana, polvo edta disódico de calcio.

        </p>
        </div>

        <div className='LataCachorroGato' id='cajitas'>
        <img  src={LataCachorroGato} alt="LataCachorroGato"  id='imagenes'/> 
        <p id='Textos'>
          Felix Comida Húmeda Gatos Paté Salmón 156 g <br/>
          Se el primero en dejar una opinión para este artículo <br/>
          El Paté de Salmón en lata de Felix de Purina es
          una deliciosa comida húmeda para gatos que cuenta 
          con una agradable textura y salsa a la cual tu gato 
          no podrá resistirse. Este alimento además de ser sabroso,
            tiene un gran contenido nutricional, pues aportará vitaminas, 
            minerales y ácidos grasos que favorecerán una saludable nutrición. 
            <br/>
          $ 5.333
         </p>
     
        </div>
          </nav>
          

         
    </header>

    
    
  )
}

export default Comida;

