import React from 'react'
import './Item.css'
import {aeonium, sedum, cactus, unusual} from '../Product-data/product-data'

class Item extends React.Component {
    constructor(props) {
        super(props);

        const productList = aeonium.concat(sedum, cactus, unusual);
        const itemName = (props.link).toUpperCase().replaceAll("-", " ");
        this.product = productList.find(product => product.name === itemName);

        this.state = {
            selected_price: this.product.prices[0]
        }

        this.selectPrice = this.selectPrice.bind(this);
    }

    selectPrice(e) {
        this.setState({
            selected_price: this.product.prices[this.product.sizes.indexOf(e.target.value)]
        });
    }
    
    render() {
        return (
            <section className="product-page">
                <div className="product-image">
                    <img alt="plant" src={require("../Product-data/" + this.product.imageSrc)} />
                </div>
                
                <div className="product-info">
                    <h1 className="product-name">{this.product.name}</h1>
                    <h3>${this.state.selected_price}</h3>
                    
                    <form className="sizes">
                        <h5>SIZE</h5>
                        <div className="sizes__buttons">
                            {this.product.sizes.map(size => {
                                return (
                                    <div>
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
                    
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
            </section>
        );
    }
}

export default Item;