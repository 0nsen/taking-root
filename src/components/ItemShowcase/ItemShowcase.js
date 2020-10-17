import React from 'react'
import './ItemShowcase.css'
import {Link} from 'react-router-dom'
import '../NavBar/NavBar.css'

export default function ItemShowcase(props) {
    const dropDown = () => {
        // var  = document.querySelector("");
        // if (!.id) .id = "visible";
        // else .removeAttribute("id");
    }
    
    const style = {
        color: 'black',
        textDecoration: 'none',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

    const link = (props.info.name).toLowerCase().replaceAll(" ", "-");

    return (
        <div className="item-showcase">
            <button className='add-to-cart__button'>ADD TO CART<span onClick={dropDown} className='dropdown-arrow'></span></button>
            
            <Link to={`/all-collections/${link}`} style={style}>
                <img alt="product" className='item-img' src={require('../Product-data/' + props.info.imageSrc)}/>
                <h4 className='item-name'>{props.info.name}</h4>
                <h4 className='item-price'>${props.info.prices[0]}</h4>
            </Link>
        </div>
    );
}