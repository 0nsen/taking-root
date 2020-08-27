import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Cart from '../Cart/Cart.js';
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
            cursor: 'pointer'
        }

        return (
            <nav>
                <div className="navbar__top">
                    <div className="cart">CART</div>
                    <Link to='/login' style={{marginRight: '2em', width: '5%'}}><button className="login">LOGIN</button></Link>
                </div>
                
                <div className="navbar__bottom">
                    <Link to='/' style={{color: 'white'}}><h1 id="shop-name">Taking Root</h1></Link>
                    
                    <div className="navbar__bottom--right">
                        <Link to='/' style={style}><h1>SHOP</h1></Link>
                        <Link to='/about' style={style}><h1>ABOUT</h1></Link>
                        <Link to='/contact' style={style}><h1>CONTACT</h1></Link>
                        <SearchBar />
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
