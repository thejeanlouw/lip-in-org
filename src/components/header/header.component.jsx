import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import LipinLogoBlack from './lipi-in-org.png'

import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
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
                {currentUser?
                <div className='option' onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN    
                </Link>}
            </div>
        </div>
    )
}

export default Header;