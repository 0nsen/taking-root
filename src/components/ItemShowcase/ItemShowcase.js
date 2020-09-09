import React from 'react'
import './ItemShowcase.css'
import {Link} from 'react-router-dom'

class ItemShowcase extends React.Component {
    render() {
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

        return (
            <div className="item-showcase">
                <Link to={`/${this.props.name == 'UNUSUAL SPECIES' ? 'unusual' : this.props.name.toLowerCase()}`} style={style}>
                    <img className='item-img' src={this.props.imageSrc}/>
                    <h4 className='item-name'>{this.props.name}</h4>
                </Link>
                
            </div>
        );
    }
}

export default ItemShowcase;