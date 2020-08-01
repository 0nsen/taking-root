import React from 'react';
import './Home.css';
import containerBanner from './photo-of-plants-on-the-table-1005058.png';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class Home extends React.Component {
    render() {
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
        );
    }
}

export default Home;