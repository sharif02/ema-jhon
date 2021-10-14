import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../hooks/UseFirebase';
import './Login.css'

const Login = () => {
    const { user, signinPopup } = UseFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Emajhon</h2>

                <form action="">
                    <input type="email" placeholder="Enter Tour email" /><br />
                    <input type="password" placeholder="Enter Tour password" />
                    <br />
                    <input type="submit" placeholder="LogIn" />
                </form>
                <p><u>New to Emazon?</u> <br /><Link to="/register">Create New</Link></p>
                <br />

                <div>-----------or ----------</div><br />
                <button onClick={signinPopup} className="btn-regular">Sign With Google</button>
            </div>

        </div >
    );
};

export default Login;