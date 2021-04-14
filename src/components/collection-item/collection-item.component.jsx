import React from 'react';
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { addItemToCart } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';

const CollectionItem = ({id, name, amount, imageUrl, addItem}) =>{
    return(
    <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='amount'>R{amount}</span>
        </div>
        <CustomButton inverted 
        onClick={()=>addItem({id:id, name:name, amount:amount, image: imageUrl})}>
            DONATE
        </CustomButton>
    </div>
)}

const matchDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})

export default connect(null, matchDispatchToProps)(CollectionItem);