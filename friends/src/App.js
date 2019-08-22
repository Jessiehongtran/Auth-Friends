import React from 'react';
import Login from './components/Login'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Friendlist from './components/Friendlist'
import PrivateRoute from './components/PrivateRoute'
import Protected from './components/Protected'
import AddFriend from './components/AddFriend'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Let's build a fun app!</h1>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friendlist">Friendlist</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
      
          <Route exact path="/login" component={Login} />
          <Route exact path="/friendlist" component={Friendlist} />
          <PrivateRoute exact path="/protected" component={Protected}/>
      </div>
    </Router>
  );
}

export default App;
