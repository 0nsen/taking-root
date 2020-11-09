import React from 'react'
import './Item.css'
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

class Item extends React.Component {
    constructor(props) {
        super(props);

        const itemName = (props.link).toUpperCase().replaceAll("-", " ");
        const product = this.props.all_plants.find(product => product.name === itemName);

        this.state = {
            product: product,
            selected_index: 0,
            quantity: 1,
        };

        this.selectIndex = this.selectIndex.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.quantityChange = this.quantityChange.bind(this); 
    }

    selectIndex(e) {
        this.setState({
            selected_index: this.state.product.sizes.indexOf(e.target.value)
        });
    }

    quantityChange(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    handleClick() {
        this.props.addToCart(   
            this.state.product.key, 
            this.state.product.sizes[this.state.selected_index], 
            this.state.quantity,
            this.state.product.prices[this.state.selected_index]
        );

        document.querySelector(".added-popup").style.display = 'block';
        setTimeout(() => {
            document.querySelector(".added-popup").style.display = 'none';
        }, 1000);
    }
    
    render() {  
        return (
            <section className="product-page">
                <div className="product-image">
                    <img alt="plant" src={require("../Product-data/" + this.state.product.imageSrc)} />
                </div>
                
                <div className="product-info">
                    <h1 className="product-name">{this.state.product.name}</h1>
                    <h3>${this.state.product.prices[this.state.selected_index]}</h3>
                    
                    <form className="sizes">
                        <h5>SIZE</h5>
                        <div className="sizes__buttons">
                            {this.state.product.sizes.map((size, i = 0) => {
                                i++
                                return (
                                    <div id={`size-${i}`}>
                                        <input onClick={this.selectIndex} name="size" id={size.replaceAll(" ", "-")} type="radio" value={size}/>
                                        <label for={size.replaceAll(" ", "-")}>{size}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </form>
                    
                    <div className='quantity'>
                        <h5>QUANTITY</h5>
                        <input onChange={this.quantityChange} type="number" min="1" defaultValue="1"/>
                    </div>
                    
                    <button onClick={this.handleClick} className="add-to-cart">ADD TO CART</button>
                </div>

                <div className='added-popup'>
                    Added to cart!
                </div>
            </section>
        );  
    }
}

const mapStateToProps = (state) => {
    return {
        all_plants: state.all_plants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (key, size, quantity, price) => {dispatch(addToCart(key, size, quantity, price))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);