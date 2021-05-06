import React from 'react'
import { connect } from 'react-redux'
import './checkout-item.styles.scss'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { removeItemFromCart } from '../../redux/cart/cart-actions'

const CheckoutItem = ({removeItemFromCart, cartItem}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={cartItem.image} alt="checkout-item"/>
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="price">{cartItem.amount*cartItem.quantity}</span>
            <span className="remove-button" onClick={()=>removeItemFromCart(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: cartItem => dispatch(removeItemFromCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
