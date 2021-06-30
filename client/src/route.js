import React from 'react';
import  icon from "./components/Fontawesomeicons/icon.js";
import Home from "./components/pages/Home";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import AuthState from './context/authContext/AuthState'

import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Studentpage from './components/pages/Studentpage.js';
import PrivateRoute from './components/pages/routes/PrivateRoute'
import setToken from './utils/setToken'
import AdminDashboard from './components/Module2/AdminDashboard'
import CreateTest from './components/Module2/CreateTest'
import Question from './components/Module2/Question'
import ViewTest from './components/Module2/ViewTest'
import EditTest from './components/Module2/EditTest'
import Userperformance from './components/Module2/Userperformance'
import AddQuestion from './components/Module2/AddQuestion'
import ViewQuestion from './components/Module2/ViewQuestion'
import Profile from './components/pages/Profile'
import Changepswd from './components/pages/Changepswd'
import EditProfile from './components/pages/EditProfile'

if(localStorage.token ){
  setToken(localStorage.token)
}

  
function route() {
  return (
   
    <div className="App">
      <AuthState>
      <Router>
        <div>
        
     
        <Switch>
          <PrivateRoute exact path = '/Home' component ={Home}/>
          <Route exact path = '/Signup' component ={Signup}/>
          <Route exact path = '/login' component ={Login}/>
          <Route exact path = '/Studentpage' component ={Studentpage}/>
          <Route exact path = '/Admin-dashboard' component ={AdminDashboard}/>
          <Route exact path = '/Create-test' component ={CreateTest}/>
          <Route exact path = '/View-test' component ={ViewTest}/>
          <Route exact path = '/Question' component ={Question}/>
          <Route exact path = '/Edit-Test/:id' component ={EditTest}/>
          <Route exact path = '/User-performance' component ={Userperformance}/>
          <Route exact path = '/Add-Question/:id' component ={AddQuestion}/>
          <Route exact path = '/View-Question/:id' component ={ViewQuestion}/>
          <Route exact path = '/Profile' component ={Profile}/>
          <Route exact path = '/Edit-Profile/:id' component ={EditProfile}/>
          <Route exact path = '/Change-password' component ={Changepswd}/>

        </Switch>
        </div>
      </Router>
      </AuthState>
       
         
         
    </div>
  );
}

export default route;
