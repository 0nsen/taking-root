import React from 'react'
import './ItemShowcase.css'
import {Link} from 'react-router-dom'

export default function CategoryShowcase(props) {
    const style = {
        color: 'black',
        textDecoration: 'none',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
    
    const link = props.name === 'UNUSUAL SPECIES' ? 'unusual' : props.name.toLowerCase();

    return (
        <div className="item-showcase">
            <Link to={`/all-collections/${link}`} style={style}>
                <img className='item-img' alt="category" src={props.imageSrc}/>
                <h4 className='item-name'>{props.name}</h4>
            </Link>
        </div>
    );
}