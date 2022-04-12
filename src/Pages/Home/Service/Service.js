import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>Order: {name}</button>
        </div>
    );
};

export default Service;