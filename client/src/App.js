import React from 'react';
import  icon from "./components/Fontawesomeicons/icon.js";
import  Login from './components/Login.js'
import './App.css';
import PATH from './route.js'
import Quizpath from './quizroute'
import Assesmentpath from './assesmentroute'
  
function App() {
  return (
   
    <div className="App">
      
       <PATH/>
       <Quizpath/>
        <Assesmentpath/>
    </div>
         
         
  );
}

export default App;
