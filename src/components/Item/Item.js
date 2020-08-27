import React from 'react'
import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="product-page">
                <div className="product-image">

                </div>
                <div className="product-info">
                    <h1 className="product-name">{this.props.name}</h1>
                </div>
            </div>
        );
    }
}

export default Item;