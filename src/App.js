import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import allCurency from "./containers/allCurency";
import Nav from './components/NavbarFooter/Nav';
import './components/NavbarFooter/NavFooter.css';
import Footer from './components/NavbarFooter/Footer';


function App() {
  return (
    <>
      <Nav className="nav">
        <Link to='/'>All Currencies</Link>
      </Nav>


      <Switch>
        <Route path='/' exact component={allCurency} />
      </Switch>

      <Footer/>
    </>
  );
}

export default App;
