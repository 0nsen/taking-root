import React from 'react'
import './ItemShowcase.css'
import {Fragment} from 'react'

export default function CategoryShowcase(props) {
    return (
        <Fragment>
            <img className='item-img' alt="category" src={props.imageSrc}/>
            <h4 className='item-name'>{props.name}</h4>
        </Fragment>
    );
}