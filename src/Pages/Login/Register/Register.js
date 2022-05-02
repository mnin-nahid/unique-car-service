import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h2 className='register-title'>You can Register hear!</h2>
            <form onSubmit={handleRegister}>
                <Form.Label>Name</Form.Label>
                <input type="text" name="name" id="" placeholder='Your name' />
                <Form.Label>Email address</Form.Label>
                <input type="email" name="email" id="" placeholder='Your email' required />
                <Form.Label>Password</Form.Label>
                <input type="password" name="password" id="" placeholder='Enter a password' required />
                <input type="submit" value="Register" />
            </form>
            <p>alrady have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>login hear.</Link></p>
        </div>
    );
};

export default Register;