import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Me
        </p><br></br>
        <p>Email:-suhaibhusssain@gmail.com</p>
        <br></br>
        <p>suhaib.hussain26000@gmail.com</p>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
       
          </div>
         
          <div class='social-icons'>
           
            <Link
              class='social-icon-link instagram'
              onClick={()=>(window.open("https://www.instagram.com/llsuhaibll/","_blank"))}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link instagram '
              onClick={()=>(window.open("https://github.com/DarkriderSH7","_blank"))}
              target='_blank'
              aria-label='Instagram'
            >
           <i class="fab fa-github"></i>
            </Link>
          
           
            <Link
              class='social-icon-link twitter'
              onClick={()=>(window.open("https://www.linkedin.com/in/suhaib-hussain-1056941a6/","_blank"))}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

export default Footer;
