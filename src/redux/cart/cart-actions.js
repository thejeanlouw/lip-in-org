import CartActionTypes from './cart-action-types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})