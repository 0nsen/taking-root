import React from 'react'
import './AllCollection.css'
import '../About/About.css'
import {cactus} from '../Product-data/product-data.js'
import ItemShowcase from '../ItemShowcase/ItemShowcase';

class Cactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cactus: cactus
        }
    }

    readMore()  {
        if (document.querySelector('#more').style.display === 'none') {
            document.querySelector('#more').style.display = 'inline';
            document.querySelector('#read-more').innerHTML = 'Read Less';
          
        }
        else if (document.querySelector('#more').style.display === 'inline') {
            document.querySelector('#more').style.display = 'none';
            document.querySelector('#read-more').innerHTML = 'Read More';
        }
    }

    render() {
        return (
            <div className='collection'>
                <header className='collection__header'>
                    <h2>CACTUS</h2>
                </header>

                <article>
                    <p className="paragraph">
                        <br/><br/>
                        <h3><strong>WHAT IS A CACTUS PLANT?</strong></h3>
                        A collection of beautiful <strong>cacti</strong> that have scales and spines instead of leaves to adapt to extremely dry desert areas. Most of them have thick fleshy stems or branches to conserve water, so they can tolerate drought very well. A cactus is a great addition to the home thanks to its striking shape, size and flowers.
                        <br/>

                        <span id="more" style={{display: 'none'}}>
                            All cactus plants are members of the Cactaceae family, and there are thousands of species of cactus. Desert cacti have a unique, strong beauty, and some of the desert cacti feature the most beautiful flowers in the plant kingdom.
                            <br/>
                            Another type of cacti, the forest cacti are usually found in wooded areas, ranging from temperate forests to subtropical and tropical regions. One of the most popular forest cacti is Christmas/Thanksgiving cactus.
                            <br/><br/>
                            <strong>Is Cactus a Succulent?</strong>
                            <br/>
                            Succulents are a group of plant families that store water in their stems, leaves and roots. Cacti store water in their stems, which makes them a sub-category or a genus within the succulents groups of plant families. All cacti are succulents but not all succulents are cacti. 
                            <br/>
                            <strong>Botanical Name</strong> Cactaceae
                            <br/>
                            <strong>Common Name</strong> Cactus, desert cactus, forest cactus
                            <br/>
                            <strong>Plant Type</strong> Succulents 
                            <br/>
                            <strong>Mature Size</strong> Varies depending on variety
                            <br/>
                            <strong>Sun Exposure</strong> Some direct sun; quantity varies depending on variety
                            <br/>
                            <strong>Soil Type</strong> Well-draining sandy soil
                            <br/>
                            <strong>Soil pH</strong> 5.5 to 7
                            <br/>
                            <strong>Bloom Time</strong> Varies
                            <br/>
                            <strong>Flower Color</strong> <t/> Varies
                            <br/><br/>
                            <h3><strong>CACTUS CARE GUIDE</strong></h3>
                            <strong>Light</strong>
                            <br/>
                            Desert cacti require strong light, especially in the winter. They'd do well with 6+hours of sunlight every day. However, they could get sunburned if exposed to intense heat.
                            <br/>
                            Forest cacti like bright indirect light. You could move them outside during their growth season (in the summer). But they also don't tolerate high heat well, so make sure they don't get scorched outside in the summer.
                            <br/>
                            <strong>Soil</strong>
                            <br/>
                            Use a fast-draining soil mix for your cacti. You can use a ready-made cactus soil mix or make a basic soil mix with a ratio 1:1 potting soil & inorganic matter (e.g perlite). More on soil mix for cacti and succulents here
                            <br/>
                            <strong>Watering</strong>
                            <br/>
                            During growing seasons (spring & summer) water your desert cacti whenever the soil is completely dry. And give them a good thorough soaking each time you water them. During the dormant season (winter) cease watering, only water them if the plants begin to shrivel. 
                            <br/>
                            You can water your forest cacti a bit more during the growth period and reduce watering during the dormant period.
                            <br/>
                        </span>

                        <span id="read-more" onClick={this.readMore}>Read more</span>
                    </p>
                </article>
                <section className='showcase'>
                    {this.state.cactus.map(item => {
                        return (
                            <ItemShowcase info={item}/>
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default Cactus;