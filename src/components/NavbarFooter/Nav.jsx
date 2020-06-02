import React from 'react';
import { Navbar, Nav as Navigation } from 'react-bootstrap';
import './NavFooter.css';

function Nav(props) {
    return (
        <div className='miron'>
            <Navbar bg="dark" variant="dark" expand="lg" className="Nav" sticky='top'>
                <Navigation className="mr-auto">
                    <Navbar.Brand className="text_logo">Currency</Navbar.Brand>
                    <div className="text_children">
                        {/* Children в App.js */}
                        <span className="childrenNav">{props.children}</span>
                    </div>
                </Navigation>
            </Navbar>
        </div>
    )
}
export default Nav;