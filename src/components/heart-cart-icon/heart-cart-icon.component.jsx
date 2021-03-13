import React from 'react';
import './heart-cart-icon.styles.scss'
import Heart from './images/heart.png'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-actions'

const HeartCartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <img src={Heart} className='shopping-icon'/>
        <span className='item-count'>
            0
        </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(HeartCartIcon);