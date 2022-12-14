import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ReactDOM from "react-dom/client";
import Comida from './pages/Comida';
import Home from './pages/Home';
import Accesorios from './pages/Accesorios';
import Tips from './pages/Tips';




function App() {
  return (
    <div className="App">
      <header className="App-header">
    

   
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Home/>}/> 
        <Route path="/Comida" element={<Comida/>} />
        <Route path="/Accesorios" element={<Accesorios/>}/>
        <Route path="/Tips" element={<Tips/>}/>
      </Routes>
    </BrowserRouter>


      </header>

    </div>
  );
}


export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);