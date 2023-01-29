import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Old Baneshwor, Kathmandu</p>
          <p className="p__opensans">+977 98000000000</p>
          <p className="p__opensans">+977 98010101010</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"The  st way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />
          <div className="app__footer-links_icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
      </div>
      <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">09:00 am -04:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">09:00 am -06:00 am</p>
          
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Beckham. All Rights Reserved</p>
    </div>
  </div>

);

export default Footer;
