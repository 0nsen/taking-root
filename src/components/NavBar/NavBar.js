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
                    <div className="login">LOGIN</div>
                </div>

                <div id="navbar-logo">
                    <a href="/"><img src="placeholder" alt="Taking Root"/></a>
                </div>

                <div class="navbar-right">
                    <div id="nav-items">
                        <span className="item"><a href="placeholder">Shop</a></span>
                        <span className="item"><a href="placeholder">About</a></span>
                        <span className="item"><a href="placeholder">Contact</a></span>
                    </div>
                    <div className="searchbar">SEARCHBAR</div>
                </div>
            </div>
        )
    }
}

export default NavBar;
