import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Login from './login';
import Signup from './Signup';
import Navigation from './navigation';

function App() {
  return (
    <Router>
      <Signup/>
      <Login/>
     
     
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
        </Routes>
    
    </Router>
  );
}

export default App;






