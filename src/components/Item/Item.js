import React from 'react'
import './Item.css'
import {aeonium, sedum, cactus, unusual} from '../Product-data/product-data'

class Item extends React.Component {
    render() {
        return (
            <section className="product-page">
                <div className="product-image">
                    <img src={require("../Product-data/" + this)} />
                </div>
                <div className="product-info">
                    <h1 className="product-name">{this.product.name}</h1>
                    <h3>${this.product.prices[0]}</h3>
                    
                    <form className="sizes">
                        <h5>SIZE</h5>
    
                        <input name="size" id='2inch' type='radio' value='2 inch' defaultChecked/>
                        <label for='2inch'>2 INCH</label>
                        
                        <input name="size" id='2inchpot' type='radio' value='2" + clay pot'/>
                        <label for='2inchpot'>2" + CLAY POT</label>
                        
                        <input name="size" id='4inch' type='radio' value='4 inch'/>
                        <label for='4inch'>4 INCH</label>
                        
                        <input name="size" id='4inchpot' type='radio' value='4" + clay pot'/>
                        <label for='4inchpot'>4" + CLAY POT</label>
                        
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