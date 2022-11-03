
import './App.css';
import {Comida} from './components/Comida';
import CuartoComponente from './components/CuartoComponente';
import { PrimerComponente } from './components/PrimerComponente';
import { QuintoComponente } from './components/QuintoComponente';
import SegundoComponente from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';




function App() {
  return (
    <div className="App">
      <header className="App-header">
    


      <PrimerComponente/>
     <SegundoComponente/>
     <TercerComponente/>
     <CuartoComponente/>
     <QuintoComponente/>
     <Comida/>
  


      </header>
    </div>
  );
}

export default App;
