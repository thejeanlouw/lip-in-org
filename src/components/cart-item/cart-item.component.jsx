import React from 'react'
import './cart-item.styles.scss'

export default function CartItem({item: {image, amount, name, quantity}}) {
    return (
        <div className='cart-item'>
            <img src={image} alt='item'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='amount'>R{quantity? quantity*amount : amount}</span>
            </div>
        </div>
    )
}
