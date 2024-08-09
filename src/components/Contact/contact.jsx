import React, { useRef } from 'react'
import walmart  from '../../assets/walmart.png'
import adobe  from '../../assets/adobe.png'
import microsoft  from '../../assets/microsoft.png'
import facebook  from '../../assets/facebook.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter.png'
import youtubeIcon from '../../assets/youtube.png'
import instagramIcon from '../../assets/instagram.png'
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_v4xys3d', 'template_f50xlf9', form.current, 'm9mW952ywUxnTS9fc')
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={adobe} alt="adobe" className="clientImg"/>
                    <img src={walmart} alt="walmart" className="clientImg"/>
                    <img src={microsoft} alt="microsoft" className="clientImg"/>
                    <img src={facebook} alt="facebook" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the nelow to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name'/>
                    <input type="email" className="email" placeholder="Your Email" name='from_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook Icon" className="link"/>
                        <img src={twitterIcon} alt="Twitter Icon" className="link"/>
                        <img src={youtubeIcon} alt="Youtube Icon" className="link"/>
                        <img src={instagramIcon} alt="Instagram Icon" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
