import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblesPage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='navbar'>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/bubbles">Bubbles</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <PrivateRoute exact path='/bubbles' component={BubblesPage}/>
          <Route path='/login' component={Login}/>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
