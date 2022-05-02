import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const _id = service?._id;
    const {img, name, price, description} = service;

    

    const navigate = useNavigate();

    const handelServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handelServiceDetail(_id)} className='btn btn-primary'>Order: {name}</button>
        </div>
    );
};

export default Service;