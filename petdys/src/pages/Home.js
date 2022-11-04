import React from 'react'
import CuartoComponente from '../components/CuartoComponente';
import { PrimerComponente } from '../components/PrimerComponente';
import { QuintoComponente } from '../components/QuintoComponente';
import SegundoComponente from '../components/SegundoComponente';
import { TercerComponente } from '../components/TercerComponente';

export default function Home() {
  return (
    <div>
     <PrimerComponente/>
     <SegundoComponente/>
     <TercerComponente/>
     <CuartoComponente/>
     <QuintoComponente/>
    </div>
  )
}
