import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import LoginHome from './Components/Login Page/loginHome';
import {BrowserRouter,Route} from "react-router-dom"
import Home from './Components/Home/home';
import Profile from './Components/Home/Profile/profile';
const App = () => {
  return (
    <BrowserRouter>
      
        <Route path="/" exact component={LoginHome}/>
        <Route path="/home" exact component={Home}/> 
        <Route path="/profile/:name"  component={Profile}/>
    </BrowserRouter>

  );
}

export default App;
