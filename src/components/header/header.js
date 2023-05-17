import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo.jpg';

function Header(){        
    return(
        <>
        <header>
            <img id="logo" src={Logo} alt="" />
            <nav>
                <ul>
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
        </header>   
     </>   
    )
}

export default Header;




