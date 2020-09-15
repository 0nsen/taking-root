import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Cart from '../Cart/Cart.js';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    dropDown() {
        var navDropdownContent = document.querySelector(".nav-dropdown__contents");
        if (!navDropdownContent.id) navDropdownContent.id = "visible";
        else navDropdownContent.removeAttribute("id");  
    }

    render() {
        return (
            <nav>
                <div className="navbar__top">
                    <div className="cart">CART</div>
                    <Link to='/login' style={{marginRight: '2em', width: '5%'}}><button className="login">LOGIN</button></Link>
                </div>
                
                <div className="navbar__bottom">
                    <Link id="shop-name" to="/">Taking Root</Link>

                    <div className="nav-dropdown" onClick={this.dropDown}>
                        <div className="nav-dropdown__icon">
                            <div id="bar1"></div>
                            <div id="bar2"></div>
                            <div id="bar3"></div>
                        </div>
                        <div className="nav-dropdown__contents">
                            <Link className="link shop" to="/all-collections">SHOP</Link>
                            <Link className="link nav-about" to="/about">ABOUT</Link>
                            <Link className="link nav-contact" to="/contact">CONTACT</Link>
                        </div>
                    </div>

                    <div className="navbar-items">
                        <div className="shop-dropdown">
                            <Link className="link shop" to="/all-collections">SHOP<span className="dropdown-arrow"></span></Link>
                            <div className="shop-dropdown__contents">
                                <Link className="link shop-dropdown__content-link" to="/all-collections/aeonium">Aeonium</Link>
                                <Link className="link shop-dropdown__content-link" to="/all-collections/cactus">Cactus</Link>
                                <Link className="link shop-dropdown__content-link" to="/all-collections/sedum">Sedum</Link>
                                <Link className="link shop-dropdown__content-link" to="/all-collections/unusual">Unusual Species</Link>
                            </div>
                        </div>
                        <Link className="link nav-about" to="/about">ABOUT</Link>
                        <Link className="link nav-contact" to="/contact">CONTACT</Link>
                    </div>
                    <SearchBar/>
                </div>
            </nav>
        )
    }
}

export default NavBar;
