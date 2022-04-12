import React from 'react';
import notfound from '../../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='container w-50 mx-auto'>
            <img className='w-100' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;