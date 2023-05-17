import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStore>
      <App />
    </UserStore>
  </React.StrictMode>
);


// Na linha (6), foi criada uma const root (raiz), chama o metodo "ReactDom" (exportado do pacote externo)
// criou uma root e pegou a div que está dentro do indexedDB.html 
// depois está redenrizando um código dentro da root (root.render) depois dentros dos parametros (), está passando código que tem escrito no app.js