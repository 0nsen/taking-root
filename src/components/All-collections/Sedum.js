import React from 'react'
import '../About/About.css'
import './AllCollection.css'
import {sedum} from '../Product-data/product-data'
import ItemShowcase from '../ItemShowcase/ItemShowcase';

class Sedum extends React.Component {
    readMore()  {
        if (document.querySelector('#more').style.display == 'none') {
            document.querySelector('#more').style.display = 'inline';
            document.querySelector('#read-more').innerHTML = 'Read Less';
          
        }
        else if (document.querySelector('#more').style.display == 'inline') {
            document.querySelector('#more').style.display = 'none';
            document.querySelector('#read-more').innerHTML = 'Read More';
        }
    }

    render() {
        return (
            <div className="collection">
                <header className="collection__header">
                    <h2>SEDUM</h2>
                </header>

                <article>
                    <p className="paragraph">
                        <br/><br/>
                        <h3><strong>SEDUM SUCCULENT DESCRIPTION</strong></h3>
                        <strong>Sedum</strong> is a large genus of flowering plants in the family Crassulaceae, including up to 600 species of annuals, perennials, creeping herbs, and sub(shrubs). Sedum plants come in a wide variety of heights, colors, and forms.
                        <br/>
                        <span id="more" style={{display: 'none'}}>
                            They are one of the easiest succulents to take care of because they are extremely forgiving of sun and bad quality soil. Sedum plants are also known as stonecrops thanks to their tough growing habit and their ability to thrive in drought and poor soil. Sedum plants have succulent leaves. They are perfect for rock gardens and ground covers.
                            <br/><br/>
                            <h3><strong>CAREGUIDE INSTRUCTION</strong></h3>
                            <strong>Temperature</strong>
                            <br/>
                            These succulents prefer warm weather. Temperatures in the spring and fall are optimal for them. They don’t do too well in too hot weather.
                            <br/>
                            <strong>Light</strong>
                            <br/>
                            Full sun to Light shade. Bright, filtered light and ample airflow are recommended. The lack of sunlight can cause them to etiolate and lose their vibrant colors. 
                            <br/>
                            <strong>Water</strong>
                            <br/>
                            Water thoroughly only when the soil is dry to the touch (about every 2 weeks). Never let your succulents sit in water and do NOT water on the leaves. Don't forget to learnhow to water your succulents the right way.
                            <br/>
                            You can water more often if you live in areas with hot weather because your soil will dry out faster. Reduce watering in winter because the succulent can lose its roots if the soil stays cold and wet for an extended amount of time.
                            <br/>
                            <strong>Soil</strong>
                            <br/>
                            We recommend to use a cactus mix or very fast-draining potting soil. For garden plantings, the ideal soil is sandy and well-drained soils.
                            <br/>
                        </span>

                        <span id="read-more" onClick={this.readMore}>Read more</span>
                    </p>
                </article>

                <section className='showcase'>
                    {sedum.map(item => {
                        return (
                            <ItemShowcase imageSrc={require('../Product-data/' + item.imageSrc)} name={item.name} price={item.prices[0]}/>
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default Sedum;