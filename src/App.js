import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Elenco from './pages/elenco/elenco';
import Comentarios from './pages/comentarios/comentarios'

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contato' element={<Contato/>}/>
       <Route path='/elenco' element={<Elenco/>}/>
       <Route path='/comentarios' element={<Comentarios/>}/>

       </Routes>
    </BrowserRouter>
  );
}

export default App;

