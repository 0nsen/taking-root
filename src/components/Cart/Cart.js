import React from 'react';
import './Cart.css';
import '../About/About.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeItem, addQuantity, subtractQuantity} from '../actions/cartActions'

function Cart(props) {
    const handleRemove = (key, size) => {
        props.removeItem(key, size);
    };

    const handleAddQuantity = (key, size) => {
        props.addQuantity(key, size);
    };

    const handleSubtractQuantity = (key, size) => {
        props.subtractQuantity(key, size);
    }

    let addedItems = props.items.length ? 
    (
        props.items.map((item, i = 0) => {
            i++;
            return (
                <li className="item-in-cart" key={item.key}>
                    <img src={require('../Product-data/' + item.imageSrc)} alt={item.name} className='item-in-cart__img'/>
                    <h4 className='item-in-cart__name'>{item.name}<Link to="/cart"><div onClick={() => {handleRemove(item.key, item.size)}} className='close-mark'></div></Link></h4>
                    <h5 className='item-in-cart__size'>Size: {item.size}</h5>
                    <h5 className='item-in-cart__quantity'>Quantity: <span onClick={() => {handleSubtractQuantity(item.key, item.size)}} className="left-arrow"></span> {item.quantity} <span onClick={() => (handleAddQuantity(item.key, item.size))} className="right-arrow"></span></h5>
                    <h4 className='item-in-cart__price'>${item.price}</h4>
                </li>
            )
        })
    ) : (
        <p className='no-item'>There are no items in your cart.</p>
    )

    return (
        <div>
            <h1 className="page-title">SHOPPING CART</h1>
            <div className="checkout">
                <section className='cart-items'>
                    {addedItems}
                </section>

                <section className='buyer-info'>
                    <div className='subtotal'>
                        <h3>Subtotal</h3>
                        <h3>${props.total}</h3>
                    </div>
                    <div className='buyer-address'>
                        <label for='address'>YOUR ADDRESS:</label>
                        <input id='address' type='text'/>
                    </div>
                    <div className='order'>
                        <label for='order-note'>ORDER NOTES:</label>
                        <textarea id='order-note'/>
                    </div>

                    <button className='purchase'>CHECKOUT</button>                    
                </section>
            </div>
        </div>
    )
}

const mapStateToProps = state =>  {
    return {
        items: state.addedItems,
        total: state.total,
        selected_index: state.selected_index,
        quantity: state.quantity
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (key, size) => dispatch(removeItem(key, size)),
        addQuantity: (key, size) => dispatch(addQuantity(key, size)),
        subtractQuantity: (key, size) => dispatch(subtractQuantity(key, size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
