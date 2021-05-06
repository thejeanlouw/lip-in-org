import React from 'react';
import './heart-cart-icon.styles.scss'
import Heart from './images/heart.png'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';


const HeartCartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <img src={Heart} className='shopping-icon'/>
        <span className='item-count'>
            {itemCount ?? 0}
        </span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(HeartCartIcon);