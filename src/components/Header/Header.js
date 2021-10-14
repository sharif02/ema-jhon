import React from 'react';
import { NavLink } from 'react-router-dom';
import UseFirebase from '../../hooks/UseFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = UseFirebase();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email ?
                        <button onClick={logOut}>LogOut</button>
                        :
                        <NavLink to="/login">LogIn</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;