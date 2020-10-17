import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import {Link} from 'react-router-dom';

export default function NavBar() {
    const dropDown = () => {
        var navDropdownContent = document.querySelector(".nav-dropdown__contents");
        if (!navDropdownContent.id) navDropdownContent.id = "visible";
        else navDropdownContent.removeAttribute("id");  
    }

    window.addEventListener('scroll', () => {
        document.querySelector('nav').style.opacity = '90%';
        document.querySelector('nav').style.transition = 'ease 0.2s';
    });
    
    return (
        <nav>
            <div className="navbar__top">
                <Link to='/cart' className='upper-linker'><button className='upper-link' id='cart-button'>CART</button></Link>
                <Link to='/login' className='upper-linker'><button className="upper-link">LOGIN</button></Link>
            </div>
            
            <div className="navbar__bottom">
                <Link id="shop-name" to="/">Taking Root</Link>

                <div className="nav-dropdown" onClick={dropDown}>
                    <div className="nav-dropdown__icon">
                        <div id="bar"></div>
                        <div id="bar"></div>
                        <div id="bar"></div>
                    </div>
                    <div className="nav-dropdown__contents">
                        <Link className="link shop" to="/all-collections">SUCCULENTS</Link>
                        <Link className="link nav-about" to="/about">ABOUT</Link>
                        <Link className="link nav-contact" to="/contact">CONTACT</Link>
                    </div>
                </div>

                <div className="navbar-items">
                    <div className="shop-dropdown">
                        <Link className="link shop" to="/all-collections">SUCCULENTS<span className="dropdown-arrow"></span></Link>
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

