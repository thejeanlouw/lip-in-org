import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import LipinLogoBlack from './lipi-in-org.png'

const Header = () => {
    return(
        <div className='header'>
            <Link className='logo-link-container' to='/'>
                <img src={LipinLogoBlack} className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/donate'>
                    DONATE
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;