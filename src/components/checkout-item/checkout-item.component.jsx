import React from 'react'
import { connect } from 'react-redux'
import './checkout-item.styles.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { addItemToCart, reduceItemInCart, removeItemFromCart } from '../../redux/cart/cart-actions'

const CheckoutItem = ({removeItemFromCart, addItem, reduceItem, cartItem}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={cartItem.image} alt="checkout-item"/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="price">
                <div className="arrow" onClick={()=>reduceItem(cartItem)}>&#10094;</div>
                <div className="value">{cartItem.amount*cartItem.quantity}</div> 
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="remove-button" onClick={()=>removeItemFromCart(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: cartItem => dispatch(removeItemFromCart(cartItem)),
    addItem: cartItem => dispatch(addItemToCart(cartItem)),
    reduceItem: cartItem => dispatch(reduceItemInCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
