import React from 'react';
import './SocialLogin.css';
import googleLogo from '../../../images/google.png';
import facebookLogo from '../../../images/facebook.jpg';
import githubLogo from '../../../images/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;

    if(error){
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='social-logiin-splider'></div>
                <p className='mt-3 px-2'>OR</p>
                <div className='social-logiin-splider'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={ ()=> signInWithGoogle()}
                    className='btn btn-info w-50 mt-3 d-block mx-auto'>
                    <img style={{ width: 30 }} src={googleLogo} alt="" />
                    <span className='px-2'>With Google</span>
                </button>
                <button className='btn btn-primary w-50 mt-3 d-block mx-auto'>
                    <img style={{ width: 30 }} src={facebookLogo} alt="" />
                    <span className='px-2'>With Facebook</span>
                </button>
                <button className='btn bg-dark text-white w-50 mt-3 d-block mx-auto'>
                    <img style={{ width: 30 }} src={githubLogo} alt="" />
                    <span className='px-2'>With GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;