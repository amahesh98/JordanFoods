import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';

import Homepage from './homepage/homepage';
import Menu from './menu/menu';
import About from './about/about';
import Header from './header/header';
import Footer from './header/footer';
import AdminLogin from './admin-login/adminLogin';
import Admin from './admin/admin';

function App() {  
  return (
    <div className="App">
      <div className='wrapper'>
        <Router>
          <Header/>
          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route exact path='/menu'>
            <Menu/>
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/admin/login'>
            <AdminLogin />
          </Route>

          <Route exact path='/admin'>
            <Admin />
          </Route>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
