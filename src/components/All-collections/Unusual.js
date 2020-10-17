import React from 'react'
import './AllCollection.css'
import '../About/About.css'
import ItemShowcase from '../ItemShowcase/ItemShowcase'
import { connect } from 'react-redux'

function Unusual(props) {
    return (    
        <div className='collection'>
            <header className='collection__header'>
                <h2>UNUSUAL SPECIES</h2>
            </header>

            <br/><br/>
            <p className='paragraph'>
            You got a lovely succulent collection but now want something different to add more colors and distinction? Here we got a large collection of rare & unusual succulents from California, updated regularly! They are amazing and alluring plants, rich textures, varied colors, and showy blooms that make a dramatic impact in any container or garden design. The leaves of these plants have very unique and interesting structures, so does the color variant. These unusual succulents that will definitely add more personality and uniqueness!
            </p>
            
            <section className='showcase'>
                {props.unusual.map(item => {
                    return (
                        <ItemShowcase key={item.key} info={item}/>
                    )
                })}
            </section>

        </div>
    )   
}

const mapStateToProps = state => {
    return {
        unusual: state.unusual
    }
}

export default connect(mapStateToProps)(Unusual);