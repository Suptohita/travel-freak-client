import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './login.css'
import icon from './icon/google.png'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInWithGoogle, user, error, setError, setUser } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/'

    const handleGoogleLogin = () => {

        signInWithGoogle()
            .then(result => {
                setUser(result.user)
            })
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error)
            })

        // (alternative process -> go_to:useFirebase.js)
        // signInWithGoogle()
        // .then(result => {
        //     history.push(redirect_uri)
        // })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className='container login-div mt-5 pt-5 mb-5 pb-5 text-center'>
                <h5 className='pt-4 pb-2'>Login With..</h5>

                <button onClick={handleGoogleLogin} className='bg-light text-dark border border-dark mb-4 pt-1 pb-1 ps-5 pe-5'>
                    <img className='me-3' style={{ width: '22px' }} src={icon} alt="" />
                    Google Login
                </button>
                {
                    user ? <h6>✔️ Login success</h6> : error ? <h6>⚠️ Login failed</h6> : ''
                }
            </div>
        </div>

    );
};

export default Login;