import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './About.css'

export default function About() {
    return (
        <div>
            <NavBar />
            <h1 className="page-title">ABOUT US</h1>
            
            <p>Taking Root currently offers more than 200 varieties of succulents (both popular and rare ones)</p>
            <img></img>
            <p>Succulents hold a special place in our hearts not only because of their elegant beauty but also of their affordability and environmental friendliness. They look similar to flowers especially rosette-types, but they live much longer and require much less care—the alternative sustainable choice for home decorations and gifts.Succulents are known for their amazing ability to thrive in poor soils and low-water conditions. Therefore, they symbolize endurance, harmony, and timelessness.</p>
            <Footer />
        </div>
    )
}