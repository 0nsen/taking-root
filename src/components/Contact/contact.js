import React from 'react'
import '../About/About.css'
import {Link} from 'react-router-dom'
import './contact.css'

export default function Contact() {
    return (
        <div>
            <h1 className="page-title">CONTACT</h1>

            <section className="contact">
                <div className="contact__info">
                    <ul>
                        <li>For marketing, media and PR (Public Relations) inquiry, please email: emilie@takingroot.com</li>
                        <br/>
                        <em>(Please understand that if you send non-marketing issues, they'll be forwarded to support@takingroot.com).</em>
                        <br/><br/>
                        <li>If you have order or plant issues, please submit this form or send an email with pictures to: support@takingroot.com.</li>
                        <br/><br/>
                        <li>If you have an issue regarding an order, please leave the name, email, and order number associated with your order so we can better assist you!</li>
                        <br/><br/>
                        <li>Check out our <a href="#"><strong>FAQs</strong></a> for information about shipping, return, cancellation policies & general succulent care questions.</li>
                    </ul>
                </div>

                <div className="contact__form">
                    <form>
                        <label for="name">NAME</label>
                        <input type="text" id="name" required />

                        <label for="email">EMAIL</label>
                        <input type="email" id="email" required/>

                        <label for="subject">SUBJECT</label>
                        <select required>
                            <option value="Subscription inquiry">Subscription inquiry</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Order issue(Non-subcription)">Order issue(Non-subcription)</option>                           
                            <option value="Payment">Payment</option>
                            <option value="Promo & Discount">Promo & Discount</option>
                            <option value="Product & Stock">Product & Stock</option>
                            <option value="Succulent care help">Succulent care help</option>
                            <option value="Account inquiry">Account inquiry</option>                         
                            <option value="Corporate gift & Bulk order">Corporate gift & Bulk order</option>
                            <option value="Partnership inquiry">Partnership inquiry</option>
                        </select>
                        
                        <label for="message">MESSAGE</label>
                        <textarea id="message" rows="8" cols="60" required></textarea>

                        <button type="submit">SEND</button>
                    </form>
                </div>
            </section>
        </div>
    );
}