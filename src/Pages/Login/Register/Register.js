import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='register-title'>You can Register hear!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' required/>
                <input type="email" name="email" id="" placeholder='Your email' required/>
                <input type="password" name="password" id="" placeholder='Enter a password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>alrady have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>login hear.</Link></p>
        </div>
    );
};

export default Register;