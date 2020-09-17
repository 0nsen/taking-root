import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="shop-banner">
                    <h2 id="tagline">
                        ORGANICALLY GROWN 
                        <br/> 
                        <em>SUCCULENTS</em>
                    </h2>
                    <button>SHOP</button>
                </div>

                <div className="new-arrivals">
                    <div className="carousel">
                        <ul>
                            
                        </ul>
                    </div>
                </div>

                <div className="shop-section">
                    <div className="container-shop">
                        
                    </div>

                    <div className="weirdos-shop">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;