import React from 'react'
import './ItemShowcase.css'
import {Link, useRouteMatch} from 'react-router-dom'

export default function ItemShowcase(props) {
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

    const link = (props.info.name).toLowerCase().replaceAll(" ", "-");

    return (
        <div className="item-showcase">
            <Link to={`/all-collections/${link}`} style={style}>
                <img alt="product" className='item-img' src={require('../Product-data/' + props.info.imageSrc)}/>
                <h4 className='item-name'>{props.info.name}</h4>
                <h4 className='item-price'>${props.info.prices[0]}</h4>
            </Link>
        </div>
    );
}