import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Cart from '../Cart/Cart.js';
import Login from '../Login/Login.js';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const style = {
            marginLeft: '2em',
            width: '10%',
            textAlign: 'center',
            padding: '1.3em 0',
            textDecoration: 'none',
            fontSize: '1.1em',
            color: 'white',
            cursor: 'pointer',
            textDecoration: 'none',
        }

        return (
            <div className="navbar-container">
                <div className="navbar-top-row">
                    <div className="cart">CART</div>
                    <Login />
                </div>
                
                <div className="navbar-bottom-row">
                    <h1 id="shop-name">Taking Root</h1>
                    
                    <div className="navbar-bottom-right">
                        <Link to='/' style={style}><h1>SHOP</h1></Link>
                        <Link to='/about' style={style}><h1>ABOUT</h1></Link>
                        <Link to='/contact' style={style}><h1>CONTACT</h1></Link>
                        <SearchBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
