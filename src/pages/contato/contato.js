import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div id="banner"></div>
      <div className="form">
        <div className="description" action="./index.js">
          <h2 className="title">Fale Conosco</h2>
          <input className="inputs inputs-1" type="text" name="nome" id="nome" placeholder="Nome" />
          <input className="inputs inputs-2" type="email" name="email" id="email" placeholder="Email" />
          <textarea className="inputs inputs-3" name="message" id="message" cols="30" rows="8" placeholder="Digite sua mensagem"></textarea>
          <button className="button">Enviar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
