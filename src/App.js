import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import allCurency from "./containers/allCurency";
import subscribeCurrencyBank from "./containers/subscribeCurrencyBank";
import Nav from './components/NavbarFooter/Nav';
import './components/NavbarFooter/NavFooter.css';
import Footer from './components/NavbarFooter/Footer';


function App() {
  return (
    <>
      <Nav>
        <Link to='/home'>All Currencies</Link>
        <Link className="paddingChildren" to='/home/subscribe'>Subscribe</Link>
      </Nav>


      <Switch>
        <Route path='/home' exact component={allCurency} />
        <Route path='/home/subscribe' component={subscribeCurrencyBank}/>
      </Switch>

      <Footer/>
    </>
  );
}

export default App;
