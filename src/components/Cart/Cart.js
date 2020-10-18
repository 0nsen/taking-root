import React from 'react';
import './Cart.css';
import '../About/About.css'
import {connect} from 'react-redux'

function Cart(props) {
    console.log("bug: " + props.selected_index);
    let addedItems = props.items.length ? 
    (
        props.items.map((item, i = 0) => {
            i++;
            return (
                <li className="item-in-cart" key={item.key}>
                    <img src={require('../Product-data/' + item.imageSrc)} alt={item.name} className='item-in-cart__img'/>
                    <h4 className='item-in-cart__name'>{item.name}</h4>
                    <h5 className='item-in-cart__size'>Size: {item.sizes[props.selected_index[i-1]]}</h5>
                    <h5 className='item-in-cart__quantity'>Quantity: {item.quantity}</h5>
                    <h4 className='item-in-cart__price'>${item.prices[props.selected_index[i-1]]}</h4>
                </li>
            )
        })
    ) : (
        <p>There are no items in your cart.</p>
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
        selected_index: state.selected_index
    }
}

export default connect(mapStateToProps)(Cart);
