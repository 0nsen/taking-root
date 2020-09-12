import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="shop-banner">
                    <h2>Organically grown <br/> SUCCULENTS</h2>
                    <button>Shop</button>
                </div>

                <div className="new-arrivals">
                    <h1>New Arrivals</h1>
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