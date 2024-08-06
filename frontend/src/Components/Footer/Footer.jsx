import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt similique unde facilis tenetur fuga voluptates nulla ducimus a, magnam optio, assumenda repudiandae architecto dolorem. Laudantium voluptates alias magni atque impedit?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivary</li>
    <li>Privacy policy</li>
</ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>7022859040</li>
                        <li>contact@tomato.com</li>
                    </ul>

                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 Tomato.Com-All Right Reserved</p>


        </div>
    )

    
}

export default Footer
