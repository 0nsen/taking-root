import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
    render() {
        const style = {
            textDecoration: 'none',
            color: 'rgb(159, 175, 160)'
        }

        return (
            <footer className="footer">
                <div className="information">
                    <h4>INFORMATION</h4>
                    <Link to='#' style={style}><h5>Terms of Use</h5></Link>
                    <Link to='#' style={style}><h5>Privacy Policy</h5></Link>
                    <Link to='#' style={style}><h5>Copyright Policy</h5></Link>
                    <Link to='#' style={style}><h5>Cancellation Policy</h5></Link>
                    <Link to='#' style={style}><h5>Shipping and Return Policy</h5></Link>
                </div>

                <div className="customer-service">
                    <h4>CUSTOMER SERVICE</h4>
                    <Link to='#' style={style}><h5>FAQ</h5></Link>
                    <Link to='/contact' style={style}><h5>Contact Us</h5></Link>
                </div>
                
                <div className="follow-us">
                    <h4>FOLLOW US</h4>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-pinterest-p"></a>
                    <a href="#"class="fa fa-youtube"></a>
                </div>
                
            </footer>
        )
    }
}

export default Footer;