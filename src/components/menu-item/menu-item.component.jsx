import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, subtitle, imageUrl, size}) => (
    <div className= {`menu-item ${size}`} >
        <div 
          className='background-image'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL+'/logo192.png'})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title?.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle?.toUpperCase()}</span>
        </div>
    </div>
)

export default MenuItem;