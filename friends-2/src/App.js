import React from 'react';
import './App.css';
import Login from './Components/login'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>It's never late to start!</h2>

      <Route path='/login' component={Login}/>
      
    </div>
  );
}

export default App;
