import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="xyz" src={assets.logo} alt="" />
                <p>A simple and efficient food ordering website that allows users to browse menus, place orders, and get their
                favorite meals delivered. Built with a user-friendly interface and seamless integration for a smooth ordering experience.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
           </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-77-490-5464</li>
                    <li>info@shaneats.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
        © 2024 SHAN EATS. All Rights Reserved. | <a href="/terms-of-use">Terms of Use</a> | <a href="/privacy-policy">Privacy Policy</a>
        </p>
    </div>
  )
}

export default Footer