import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container' key={props.soul.id}>
        <img 
        alt='goodSoul'
        src={`https://robohash.org/${props.soul.id}?set=set5&size=180x180`}
        />
        <h2>{props.soul.name}</h2>
        <p>{props.soul.email}</p>
    </div>
)