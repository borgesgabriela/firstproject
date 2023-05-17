import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo.jpg';

function Footer(){        
    return(  
        <>    
        <footer>
            <img id="logo" src={Logo} alt= ""/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Gabriela Borges</span>
        
        <nav class="footer-navigation">
                <ul class="footer-list">               
                    <Link style={{ textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to ='/elenco'>
                        <li>Elenco</li>
                    </Link >
                    <Link style={{ textDecoration: 'none'}} to ='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to ='/comentarios'>
                        <li>Comentarios</li>
                    </Link>                                    
                </ul>
            </nav>
    
    </footer>
        </>
    )
}

export default Footer;