import React from 'react'
import './ItemShowcase.css'
import {Link} from 'react-router-dom'

export default function ItemShowcase() {
    const style = {
        color: 'black',
        textDecoration: 'none',
        border: 'blue dotted 1px',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

    const link = (this.props.info.name).toLowerCase().replaceAll(" ", "-");

    return (
        <div className="item-showcase">
            <Link to={`/all-collections/${link}`} style={style}>
                <img alt="product" className='item-img' src={require('../Product-data/' + this.props.info.imageSrc)}/>
                <h4 className='item-name'>{this.props.info.name}</h4>
                <h4 className='item-price'>${this.props.info.prices[0]}</h4>
            </Link>
        </div>
    );
}

