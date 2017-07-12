import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // attaches react app to html5
import './index.css'; // styling for body
import Splash from './splash'
import Home from './Home'
import { BrowserRouter, Route, Link } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Splash}></Route>
      <Route path="/home" component={Home}></Route>
    </div>

  </BrowserRouter>,

 document.querySelector('.app')

);


// ReactDOM.render( < App /> , document.querySelector('.app'));
