import React from 'react';
import './NavFooter.css';

function Footer(props) {
    return (
        <div className='test'>
            <footer className="footer">
                <div className="flexFooter">
                    <a href="https://github.com/Miron2000" target="_blank"><i class="fa fa-github" className="icon-github" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/miron.ivashchenko" target="_blank"><i class="fa fa-facebook" className="icon-facebook" aria-hidden="true"></i></a>
                    <a href="https://t.me/currency_ua" target="_blank"><i class="fa fa-telegram" className="icon-telegram" aria-hidden="true"></i></a>
                    <a href="https://miron.ivasch@gmail.com" target="_blank"><i class="fa fa-google" className="icon-google" aria-hidden="true"></i></a>
                   
                </div>
            </footer>
        </div>
    )
}
export default Footer;