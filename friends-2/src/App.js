import React from 'react';
import './App.css';
import Login from './Components/login'
import {Route} from 'react-router-dom'
import  FriendList from './Components/friendList'
import ProtectedRoute from './Components/protectedRoute'

function App() {
  return (
    <div className="App">
      <Route path='/login' component={Login}/>
      <ProtectedRoute path='/friends' component={FriendList} />
      
    </div>
  );
}

export default App;
