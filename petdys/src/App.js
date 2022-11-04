
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CuartoComponente from './components/CuartoComponente';
import { PrimerComponente } from './components/PrimerComponente';
import { QuintoComponente } from './components/QuintoComponente';
import SegundoComponente from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';
import {Comida} from './pages/Comida' ; 




function App() {
  return (
    <div className="App">
      <header className="App-header">
    


      <PrimerComponente/>
     <SegundoComponente/>
     <TercerComponente/>
     <CuartoComponente/>
     <QuintoComponente/>

     <BrowserRouter>
      
      <Routes>
      
        <Route path="/" element={<App/>}>
        <Route path="comida" element={<Comida />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
     
     



      </header>
    </div>
    
    
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

