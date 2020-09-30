import React from 'react'
import './ItemShowcase.css'
import {Link, useRouteMatch, Route, useParams} from 'react-router-dom'
import Item from '../Item/Item'

export default function CategoryShowcase(props) {
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
    
    const link = props.name === 'UNUSUAL SPECIES' ? 'unusual' : props.name.toLowerCase();
    const match = useRouteMatch();

    return (
        <div className="item-showcase">
            <Link to={`${match.url}/${link}`} style={style}>
                <img className='item-img' alt="category" src={props.imageSrc}/>
                <h4 className='item-name'>{props.name}</h4>
            </Link>
        </div>
    );
}