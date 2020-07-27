import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Cart from '../Cart/Cart.js';
import Login from '../Login/Login.js';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-top-row">
                    <div className="cart">CART</div>
                    <Login />
                </div>
                <a className="navbar-logo" href="/"><img src="placeholder" alt="Home"/><h1>Taking Root</h1></a>
                <div className="navbar-bottom-row">
                    <a id="shop" href="placeholder">SHOP</a>
                    <a id="about" href="placeholder">ABOUT</a>
                    <a id="contact" href="placeholder">CONTACT</a>
                    <SearchBar />
                </div>
            </div>
        )
    }
}

export default NavBar;
