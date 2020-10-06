import React from 'react';
import './Home.css';
import {cactus, aeonium, sedum, unusual} from '../Product-data/product-data'
import ItemShowcase from '../ItemShowcase/ItemShowcase'
import '../All-collections/AllCollections'
import CategoryShowcase from '../ItemShowcase/CategoryShowcase';

export default function Home() {
    const new_arrival = [cactus[5], sedum[5], aeonium[5], unusual[5]];
    const our_collections = [aeonium[0], cactus[0], sedum[0], unusual[0]];

    return (
        <div>
            <div className="shop-banner">
                <h2 id="tagline">
                    ORGANICALLY GROWN 
                    <br/> 
                    <em>SUCCULENTS</em>
                </h2>
                <button>SHOP</button>
            </div>

            <div className="shop-section">
                <h1>NEW ARRIVAL</h1>
                <div className="showcase">
                    {new_arrival.map((item, i = 0) => {
                        i++;
                        return <ItemShowcase key={`new_arrival-${i}`} info={item}/>
                    })}
                </div>
            </div>

            <div className="shop-section">
                <h1>OUR COLLECTIONS</h1>
                <div className="showcase">
                    {our_collections.map((item, i = 0) => {
                        i++;
                        return <CategoryShowcase key={`CAT-${i}`} imageSrc={require('../Product-data/' + item.imageSrc)} name={item.type === 'UNUSUAL' ? 'UNUSUAL SPECIES' : item.type}/>
                    })}
                </div>
            </div>
        </div>
    );
}

