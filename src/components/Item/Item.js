import React from 'react'
import './Item.css'
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';

class Item extends React.Component {
    constructor(props) {
        super(props);

        const productList = props.aeonium.concat(props.sedum, props.cactus, props.unusual);
        const itemName = (props.link).toUpperCase().replaceAll("-", " ");
        const product = productList.find(product => product.name === itemName);

        this.state = {
            product: product,
            selected_price_index: 0
        };

        this.selectPrice = this.selectPrice.bind(this);        
    }

    selectPrice(e) {
        this.setState({
            selected_price_index: this.state.product.sizes.indexOf(e.target.value)
        });
    }

    handleClick(key, price_index) {
        this.props.addToCart(key, price_index);  
    }
    
    render() {  
        return (
            <section className="product-page">
                <div className="product-image">
                    <img alt="plant" src={require("../Product-data/" + this.state.product.imageSrc)} />
                </div>
                
                <div className="product-info">
                    <h1 className="product-name">{this.state.product.name}</h1>
                    <h3>${this.state.product.prices[this.state.selected_price_index]}</h3>
                    
                    <form className="sizes">
                        <h5>SIZE</h5>
                        <div className="sizes__buttons">
                            {this.state.product.sizes.map((size, i = 0) => {
                                i++
                                return (
                                    <div id={`size-${i}`}>
                                        <input onClick={this.selectPrice} name="size" id={size.replaceAll(" ", "-")} type="radio" value={size}/>
                                        <label for={size.replaceAll(" ", "-")}>{size}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </form>
                    
                    <div className='quantity'>
                        <h5>QUANTITY</h5>
                        <input type="number" min="1" defaultValue="1"/>
                    </div>
                    
                    <button onClick={() => {this.handleClick(this.state.product.key, this.state.selected_price_index)}} className="add-to-cart">ADD TO CART</button>
                </div>
            </section>
        );  
    }
}

const mapStateToProps = (state) => {
    return {
        aeonium: state.aeonium,
        sedum: state.sedum,
        cactus: state.cactus,
        unusual: state.unusual,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (key, selected_price_index) => {dispatch(addToCart(key, selected_price_index))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);