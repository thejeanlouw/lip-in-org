import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PayFastButton from '../../components/payfast-button/payfast-button.component'

const CheckoutPage = ({cartItems, total, match}) => {
    console.log('checkout-match', match);
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Donation</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Amount</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems ? 
                cartItems.map(ci => (
                    <CheckoutItem key={ci.id} cartItem={ci} />
                )):
                <span>No donations made :(</span>
            }
            <div className="total">
                <span>TOTAL: R{total}</span>
            </div>
            <PayFastButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);