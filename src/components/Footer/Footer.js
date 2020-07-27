import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="information">
                    <h4>INFORMATION</h4>
                    <h5>Terms of Use</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Copyright Policy</h5>
                    <h5>Cancellation Policy</h5>
                    <h5>Shipping and Return Policy</h5>
                    <h5>Affiliate</h5>
                </div>

                <div className="customer-service">
                    <h4>CUSTOMER SERVICE</h4>
                    <h5>FAQ</h5>
                    <h5>Search</h5>
                    <h5>Contact Us</h5>
                </div>
                
                <div className="follow-us">
                    <h4>FOLLOW US</h4>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                </div>
            </footer>
        )
    }
}

export default Footer;