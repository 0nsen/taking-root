import React from 'react'
import './ItemShowcase.css'
import {Link} from 'react-router-dom'

export default function CategoryShowcase() {
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
    
    const link = this.props.name === 'UNUSUAL SPECIES' ? 'unusual' : this.props.name.toLowerCase();
    
    return (
        <div className="item-showcase">
            <Link to={'/all-collections/' + link} style={style}>
                <img className='item-img' alt="category" src={this.props.imageSrc}/>
                <h4 className='item-name'>{this.props.name}</h4>
            </Link>
            
        </div>
    );
}