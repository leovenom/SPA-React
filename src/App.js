import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contacts from './components/pages/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
