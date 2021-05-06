import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './header.styles.scss'
import LipinLogoBlack from './lipi-in-org.png'
import HeartCartIcon from '../heart-cart-icon/heart-cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { signOut } from "../../firebase/firebase.functions";

const Header = ({currentUser, cartHidden}) => {
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
                {currentUser!=null?
                <div className='option' onClick={()=>signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN    
                </Link>}
                <HeartCartIcon />
            </div>
            {!cartHidden? <CartDropdown />: null}
        </div>
    )
}

// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     cartHidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);