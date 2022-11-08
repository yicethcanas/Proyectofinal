import React from 'react'
import Imagen1 from './Imagenes/imagen1.png'
import Imagen2 from './Imagenes/imagen2.png'
import Imagen3 from './Imagenes/imagen3.png'
export const TercerComponente = () => {
  return (
    <div className='Carusel' id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" >
        <img src={Imagen1} class="Imagen1" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={Imagen2} class="Imagen2" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={Imagen3} class="Imagen3" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
  )
}
