import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import allCurency from "./containers/allCurency";
import Nav from './components/Navbar/Nav';
import s from './components/Navbar/NavFooter.module.css';


function App() {
  return (
    <>
      <Nav className={s.nav}>
        <Link to='/'>All Currencies</Link>
      </Nav>


      <Switch>
        <Route path='/' exact component={allCurency} />
      </Switch>

    </>
  );
}

export default App;
