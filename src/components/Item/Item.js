import React from 'react'
import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="product-page">
                <div className="product-image">

                </div>
                <div className="product-info">
                    <h1 className="product-name">AEONIUM EMERALD ICE</h1>
                    <h3>$5.85</h3>
                    <h5>SIZE</h5>
                    <h5 className="size">2 INCH</h5>
                    <h5 className="size">2" + CLAY POT</h5>
                    <h5 className="size">4 INCH</h5>
                    <h5 className="size">4" + CLAY POT</h5>
                    <h5>Quantity</h5>
                    <span className="minus icon">-</span>
                    <input type="number" min="1"/>
                    <span className="plus icon">+</span>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
            </section>
        );
    }
}

export default Item;