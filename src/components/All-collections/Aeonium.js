import React from 'react'
import './AllCollection.css'
import '../About/About.css'
import {aeonium} from '../Product-data/product-data.js'
import ItemShowcase from '../ItemShowcase/ItemShowcase';

class Aeonium extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aeonium: aeonium
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
                <header className="collection__header">
                    <h2>AEONIUM</h2>
                </header>

                <article>
                    <p className="paragraph">
                        <br/><br/>
                        <h3><strong>AEONIUM SUCCULENT DESCRIPTION</strong></h3>
                        <strong>Aeoniums</strong> (commonly known as Tree Houseleek) are colorful, gorgeous, rosette-shaped succulents. Native to the Canary Islands, this genus has about 35 different species. Aeoniums are most commonly known for their striking rosettes made up of dense, waxy leaves growing out of a single stem. Stems can be long and branched-out, or short and stubby. Flowers stems emerge from the center of the rosettes. Their small, star-like flowers grow in clusters.
                        <br/>
                        <span id="more" style={{display: 'none'}}>
                            <br/>
                            They come in a wide range of varieties, colors, shapes, and sizes. Most aeoniums are monocarpic plants, meaning they die once they produce a flower, but will usually branch to produce more rosettes. Aeoniums are hardy plants and can withstand cold, but they grow best in full sun to partial shade. Aeoniums can be grown both indoors and outdoors, either as in-ground or container plants.
                            <br/><br/>
                            <h3><strong>AEONIUM CARE GUIDE</strong></h3>
                            <strong>Watering</strong><br/>
                            Most Aeoniums are native to the Canary Islands, so they're used to a little more water than other succulents; however, this doesn't mean you can water Aeonium like normal plants. Only water Aeonium when the topsoil (1-2 inch deep) feels dry, which would be about once a week. In the summer, when Aeonium is dormant, reduce watering to about once a month; or if your Aeonium is outdoors and gets some rainwater, maybe none at all. Aeonium leaves will curl and drop during dormancy to prevent water loss, so no need to be alarmed if your Aeonium looks less than stellar in the summer. In winter, during their peak growing season, feel free to give them a good soak with a regular water schedule.
                            <br/><strong>Soil</strong><br/>
                            Aeonium succulents prefer a sandy or regular potting soil, so as to retain moisture. And since Aeonium has a shallow root system, they can survive in fairly shallow pots. Even with big Aeonium (up to 4 feet tall), their root system is underdeveloped compared to other succulents. If you're growing Aeonium in containers, you'll need to re-pot them every 2-3 years. The best time to repot Aeonium is in the fall.
                            <br/><strong>Light</strong><br/>
                            Aeonium can grow under partial shady areas to full sun, however, if you keep them under intense sun exposure, they can experience sunburn.
                            <br/><strong>Temperature</strong><br/>
                            They prefer temperatures between 40 and 100 F. (4-38 C.) If they exposed to freezing temperatures, it is very likely that your plants will not survive. In mild winters, they can grow fine even if you keep it outdoors.
                            Aeoniums are hardy in USDA zones 9-11.
                            <br/>
                        </span>
                        
                        <span id="read-more" onClick={this.readMore}>Read more</span>
                    </p>
                </article>

                <section className='showcase'>
                    {this.state.aeonium.map(item => {
                        return (
                            <ItemShowcase info={item}/>
                        );
                    })}
                </section>
            </div>
        )
    }
}

export default Aeonium;