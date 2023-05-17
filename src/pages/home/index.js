import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import './style.css';
import Video from '../../assets/video.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';
import Botão from '../../components/button/button';

function Home() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video}/>
                        Seu navegador não possui suporte para vídeos
                    </video>                
                    <div id="sinopse">
                        <p class="description">
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                            mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                            como a personificação de vingança para a população.
                        </p>
                        <Botão />                       
                    </div>
                </div>
            </div>
            <Cards />       
            <Footer />
            
        </>
    )
}

export default Home;





