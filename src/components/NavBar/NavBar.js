import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Cart from '../Cart/Cart.js';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    dropDown() {
        var dropdownContent = document.querySelector(".nav-dropdown__content");
        if (!dropdownContent.id) dropdownContent.id = "visible";
        else dropdownContent.removeAttribute("id");
    }

    render() {
        return (
            <nav>
                <div className="navbar__top">
                    <div className="cart">CART</div>
                    <Link to='/login' style={{marginRight: '2em', width: '5%'}}><button className="login">LOGIN</button></Link>
                </div>
                
                {/* <div className="navbar__bottom">
                    <Link id="shop-name__link" to='/' style={{color: 'white'}}><h1 id="shop-name">Taking Root</h1></Link>
                    
                    <div className="navbar__bottom--right">
                        <div className="shop-dropdown">
                            <Link to='/all-collections' id="dropdown-style"><h1>SHOP</h1></Link>
                            <div className="dropdown-content">
                                <Link to='/all-collections/aeonium' style={{color: 'white', textDecoration: 'none'}}><h1>Aeonium</h1></Link>
                                <Link to='/all-collections/cactus' style={{color: 'white', textDecoration: 'none'}}><h1>Cactus</h1></Link>
                                <Link to='/all-collections/sedum' style={{color: 'white', textDecoration: 'none'}}><h1>Sedum</h1></Link>
                                <Link to='/all-collections/unusual' style={{color: 'white', textDecoration: 'none'}}><h1>Unusual Species</h1></Link>
                            </div>
                        </div>
                        
                        <Link id="link-style" to='/about'><h1 className="navbar-item">ABOUT</h1></Link>
                        <Link id="link-style" to='/contact'><h1 className="navbar-item"> CONTACT</h1></Link>
                    </div>
                    <SearchBar />
                </div> */}
                <div className="navbar__bottom">
                    <Link id="shop-name" to="/">Taking Root</Link>
                    <div className="nav-dropdown" onClick={this.dropDown}>
                        <div className="nav-dropdown__icon">
                            <div id="bar1"></div>
                            <div id="bar2"></div>
                            <div id="bar3"></div>
                        </div>
                        <div className="nav-dropdown__content">


                            <div className="shop-dropdown">
                                <Link className="link" to="/all-collections">SHOP</Link>
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
                    </div>
                    <div className="navbar-items">
                        <div className="shop-dropdown">
                            <Link className="link" to="/all-collections">SHOP</Link>
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
