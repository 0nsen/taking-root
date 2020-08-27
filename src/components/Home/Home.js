import React from 'react';
import './Home.css';
import containerBanner from './photo-of-plants-on-the-table-1005058.png';

class Home extends React.Component {
    render() {
        return (
            <div>
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
                        <img alt="close-up of a succulent" src={containerBanner}></img>
                    </div>

                    <div className="weirdos-shop">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;