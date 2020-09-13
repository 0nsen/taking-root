import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Cart from '../Cart/Cart.js';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const style = {
            marginLeft: '1vw',
            width: '10%',
            height: '5rem',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '1.1vw',
            color: 'white',
            border: 'blue solid 1px'
        };

        const dropdownStyle = {
            display: 'block',
            height: '5rem',
            width: '100%',
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.1vw',
            border: 'blue solid 1px'
        };

        return (
            <nav>
                <div className="navbar__top">
                    <div className="cart">CART</div>
                    <Link to='/login' style={{marginRight: '2em', width: '5%'}}><button className="login">LOGIN</button></Link>
                </div>
                
                <div className="navbar__bottom">
                    <Link id="shop-name__link" to='/' style={{color: 'white'}}><h1 id="shop-name">Taking Root</h1></Link>
                    
                    <div className="navbar__bottom--right">
                        <div className="shop-dropdown">
                            <Link to='/all-collections' style={dropdownStyle}><h1>SHOP</h1></Link>
                            <div className="dropdown-content">
                                <Link to='/all-collections/aeonium' style={{color: 'white', textDecoration: 'none'}}><h1>Aeonium</h1></Link>
                                <Link to='/all-collections/cactus' style={{color: 'white', textDecoration: 'none'}}><h1>Cactus</h1></Link>
                                <Link to='/all-collections/sedum' style={{color: 'white', textDecoration: 'none'}}><h1>Sedum</h1></Link>
                                <Link to='/all-collections/unusual' style={{color: 'white', textDecoration: 'none'}}><h1>Unusual Species</h1></Link>
                            </div>
                        </div>
                        
                        <Link to='/about' style={style}><h1 className="navbar-item">ABOUT</h1></Link>
                        <Link to='/contact' style={style}><h1 className="navbar-item"> CONTACT</h1></Link>
                    </div>
                    <SearchBar />
                </div>
            </nav>
        )
    }
}

export default NavBar;
