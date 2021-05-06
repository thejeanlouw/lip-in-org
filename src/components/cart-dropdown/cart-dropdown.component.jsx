import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart-actions';


const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    const checkout = () => {
        toggleCartHidden();
        history.push('/checkout');
    }
    return(<div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems && cartItems.length ?
                cartItems.map(ci=>(
                    <CartItem item={ci} />
                )) : <span className="empty-message">Your heart cart is empty</span>
            }
        </div>
        <CustomButton onClick={checkout}>
            CHECKOUT
        </CustomButton>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));