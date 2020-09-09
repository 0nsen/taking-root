import React from 'react'
import './ItemShowcase.css'

class ItemShowcase extends React.Component {
    render() {
        return (
            <div className="item-showcase">
                <img src={this.props.imageSrc}/>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default ItemShowcase;