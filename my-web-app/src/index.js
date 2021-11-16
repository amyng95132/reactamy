import React from 'react';  
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from './App';  
import About from './About'; 
import Football from './Football'; 
import Form from './Form'; 
  
const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/About">About</Link>  
        </li>  
        <li>  
          <Link to="/Form">Fill the form</Link>  
        </li>
        <li>  
          <Link to="/Football">Football</Link>  
        </li>  
        <li>  
         <a href={'https://reactjs.org/docs/faq-internals.html'}>Virtual Dom</a>  
        </li> 
      </ul>  
      <Switch>  
         <Route exact path="/" component={App} />  
         <Route path="/about" component={About} />  
         <Route path="/Form" component={Form} />  
         <Route path="/Football" component={Football} />         
      </Switch>  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root')); 