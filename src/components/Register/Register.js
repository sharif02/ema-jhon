import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Your Account</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder="Enter Your name" /> <br />
                    <input type="password" name="" placeholder="Enter your Password" id="" />
                    <br />
                    <input type="password" name="" placeholder="Renter your Password" id="" />
                    <br />
                    <input type="submit" value="submit" placeholder="Submit" />
                    <br />
                    <p>already Sign up <Link to="/login">LogIn</Link></p>
                </form>

                <button className="btn-reguler">Sign With Google</button>
            </div>
        </div>
    );
};

export default Register;