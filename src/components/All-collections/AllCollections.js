import React from 'react'
import './AllCollection.css'
import '../About/About.css'
import {aeonium, cactus, sedum, unusual} from '../Product-data/product-data'
import CategoryShowcase from '../ItemShowcase/CategoryShowcase';
import {readMore} from '../utility'

export default function AllCollections() {
    const categories = [aeonium[0], cactus[0], sedum[0], unusual[0]];

    return (
        <div className="collection">
            <header className="collection__header">
                <h2>ALL COLLECTIONS</h2>
            </header>

            <article className="paragraph">
                <br/> <br/>
                <h3><strong>WHAT ARE SUCCULENTS?</strong></h3>
                Succulent plants, or succulents, are plants that can store water in their thick, fleshy parts like leaves or stems. They thrive in an arid environment and are generally drought tolerant.
                <br />

                <span id="more" style={{display: 'none'}}>
                    There are many types of succulents. The most popular succulent genera are: Echeveria, Aeonium, Aloe, Agave, Haworthia, Aeonium, Gasteria, Cactus, Crassula, Cotyledon, Kalanchoe, Sedum, Sempervivum, Senecio, Graptoveria, Adenia, Euphorbia, and Lithops.
                    <br/><br/>
                    <h3><strong>GENERAL CARE</strong></h3>
                    <em>Watering</em>
                    <ul>
                        <li>Water your succulent deeply everytime the soil is completely dry. Tip to check the soil moisture: Insert your finger in the soil to the second knuckle. If it feels wet then it’s not time to water yet.</li>
                        <li>Succulent watering routine heavily depends on the climate (humid or dry). For beginners, we recommend watering your succulent once every 10-14 days.</li>
                    </ul>
                    <em>Sunlight</em>
                    <ul>
                        <li>Most succulents require at least 4-6 hours of morning sunlight to grow. Some succulents prefer bright but filtered light like Haworthia, others like Echeveria or Cactus love full sun.</li>
                        <li>Colorful succulents often tolerate direct sun better than green succulents.</li>
                        <li>Underexposure: Lack of sunlight often results in etiolation and leaves growing downwards. Colorful succulents will lose their vivid color and turn green.</li>
                        <li>Overexposure: Succulents might get sunburned given too much sunlight so it is not recommended to expose your succulents to direct sun when the temperature is above 90F.</li>
                    </ul>
                    <em>Soil</em>
                    <ul>
                        <li>Succulents prefer gritty and well-drained soil. Porous soil is crucial in improving drainage and preventing root rotting in succulents.</li>
                        <li>You can either use cactus mix or prepare the potting medium by mixing organic (eg. dark soil, compost, bark fines) and inorganic components (eg. perlite, granite or pumice) at a 50:50 ratio.</li>
                    </ul>
                    <em>Temperature</em>
                    <ul>
                        <li>The ideal temperature for succulent is from 60 to 80°F. Some succulents like Sempervivum can tolerate temperatures as low as 20°F or as high as 90°F. Extreme temperatures can “stress” succulents into changing color.</li>
                        <li>Most succulents are drought-tolerant. However, high summer heat and direct sun can still damage your succulents by causing brown patches or sunburn on the leaves. Move your succulents indoor if you spot similar signs.</li>
                    </ul>
                </span>

                <span id="read-more" onClick={readMore}>Read more</span>
            </article>

            <section className="showcase">
                {categories.map((category, i = 0) => {
                    i++;
                    return (
                        <CategoryShowcase key={`CAT-${i}`} imageSrc={require('../Product-data/' + category.imageSrc)} name={category.type === 'UNUSUAL' ? 'UNUSUAL SPECIES' : category.type} />
                    );
                })}
            </section>
        </div>
    );
}