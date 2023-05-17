import React, { useEffect } from 'react';
import './style.css';
import Hulk from '../../assets/hulk.jpg';
import Thor from '../../assets/thor.jpg';
import Homem_de_ferro from '../../assets/homem-de-ferro.jpg';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function Comentarios() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <Header />
    <div class="coments-container">
        <h1 class="title-coments">Comentários</h1>
        <div class="coments-content">
            <div class="cardcoments">
                <img id="hulk" src={Hulk} alt=""/> 
                <h3>Hulk</h3>
                <span class="span-text">Maravilhoso. Superou todas as expectativas. O Batman que sempre quisemos ver no cinema, diferente de todos os outros, profundo, almático, detetive, triste. Enfim, sem palavras. De longe um dos melhores filmes de super herói. Batman mais uma vez sendo arte.</span>
            </div>
        <div class="cardcoments">
                <img id="thor" src={Thor} alt=""/> 
                <h3>Thor</h3>
                <span class="span-text">Sombrio e com um toque de loucura, The Batman é um dos melhores filme do morcego, mas tbm achei o filme longo demais.</span>
            </div>
        <div class="cardcoments">
                <img id="homem-de-ferro" src={Homem_de_ferro} alt=""/> 
                <h3>Homem de Ferro</h3>
                <span class="span-text">Filme sensacional. Foi um dos melhores filmes de heróis que já assisti. Robert Pattinson ficou incrível e combina muito bem com o personagem.</span>
            </div>
        </div>
    </div>
        <Footer />    
</>    
 )}
             
        

export default Comentarios;
