import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom'
import Perfil from './pages/Perfil'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
       <Perfil/>
   </BrowserRouter>
);

