import React from 'react';
import './NavFooter.css';
import {Navbar, Nav as Navigation } from 'react-bootstrap';



function Footer(props) {
    return (
        //  <Navbar bg="dark" variant="dark" className="footer" fixed='bottom'>
       <div className='test'>
            <footer className="footer">  
                <div className="flexFooter">
                <a  href="https://github.com/Miron2000" target="_blank"><span className="icon-github"></span></a>
                <a  href="https://www.facebook.com/miron.ivashchenko" target="_blank"><span className="icon-facebook"></span></a>
                <a  href="https://t.me/currency_ua" target="_blank"><span className="icon-telegram"></span></a>
                <a  href="https://miron.ivasch@gmail.com" target="_blank"><span className="icon-google"></span></a> 
                </div>
            </footer>  
            </div>
            
        // </Navbar>
    )
}
export default Footer;