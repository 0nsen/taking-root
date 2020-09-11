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
                <Link to='/ha' style={style}>
                    <img className='item-img' src={require('../Product-data/' + this.props.info.imageSrc)}/>
                    <h4 className='item-name'>{this.props.info.name}</h4>
                    <h4 className='item-price'>${this.props.info.prices[0]}</h4>
                </Link>
                
            </div>
        );
    }
}

export default ItemShowcase;