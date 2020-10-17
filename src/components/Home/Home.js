import React from 'react';
import './Home.css';
import ItemShowcase from '../ItemShowcase/ItemShowcase'
import '../All-collections/AllCollections'
import CategoryShowcase from '../ItemShowcase/CategoryShowcase';
import {connect} from 'react-redux'

function Home(props) {
    const new_arrival = [props.cactus[5], props.sedum[5], props.aeonium[5], props.unusual[5]];
    const our_collections = [props.aeonium[0], props.cactus[0], props.sedum[0], props.unusual[0]];

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

const mapStateToProps = (state) => {
    return {
        aeonium: state.aeonium,
        sedum: state.sedum,
        cactus: state.cactus,
        unusual: state.unusual,
    }
}

export default connect(mapStateToProps)(Home);