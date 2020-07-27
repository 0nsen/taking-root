import React from 'react';
import containerBanner from './photo-of-plants-on-the-table-1005058.png';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';

function App() {
    return (
        <div>
            <NavBar />

            <div className="shop-banner">
                <h2>Hundreds of <br/><em>succulents</em> at your <br/>green thumb</h2>
                <button>Shop</button>
            </div>

            <div className="new-arrivals">
                <h1>New Arrivals</h1>
                <div className="showcase">
                    <ul>
                        
                    </ul>
                </div>
            </div>

            <div className="shop-section">
                <div className="container-shop">
                    <img src={containerBanner}></img>
                </div>

                <div className="weirdos-shop">

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;
