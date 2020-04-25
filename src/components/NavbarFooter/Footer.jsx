import React from 'react';
import s from '../NavbarFooter/NavFooter.module.css';
import { Navbar } from 'react-bootstrap';


function Footer(props) {
    return (
        <Navbar className={s.footer} bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <span className="f09b"></span>
                <div>
                    <p><a href="https://github.com/Miron2000" target="_blank">GitHub</a></p>
                </div>
            </Navbar.Brand>
        </Navbar>
    )
}
export default Footer;