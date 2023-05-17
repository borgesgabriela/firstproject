import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Elenco() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div id="banner"></div>
      <div className="actor-cards-container">
        <div className="persona-cards-content">
          <div className="actor image-1">Robert Pattison - Batman</div>
          <div className="actor image-2">Zoe Kravitz - Mulher Gato</div>
          <div className="actor image-3">Paul Dano - Charada</div>
          <div className="actor image-4">Colin Farreli - Pinguim</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Elenco;