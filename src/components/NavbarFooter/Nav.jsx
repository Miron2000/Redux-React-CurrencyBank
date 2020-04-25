import React from 'react';
import {Navbar, Nav as Navigation } from 'react-bootstrap';
import s from './NavFooter.module.css';

function Nav(props){
    return(
       <Navbar bg="dark" variant="dark" className={s.Nav}>
       <Navigation className="mr-auto">
       <Navbar.Brand className={s.text_logo}>Currency</Navbar.Brand>
       <div className={s.text_children}>
       <span className={s.childrenNav}>{props.children}</span>
       </div>
       </Navigation>
       </Navbar>
    )

}
export default Nav;