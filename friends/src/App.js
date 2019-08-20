import React from 'react';
import Login from './components/Login'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Let's build a fun app!</h1>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
      
          <Route exact path="/login" component={Login} />
      
      
      </div>
    </Router>
  );
}

export default App;
