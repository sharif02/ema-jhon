import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
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
                <p><u>New to Emazon?</u> <Link to="/register">Create New</Link></p>
                <br />
                <br />
                <button className="btn-reguler">Sign With Google</button>
            </div>

        </div >
    );
};

export default Login;