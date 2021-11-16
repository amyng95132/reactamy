import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

class App extends React.Component { 
  render() {  
    return ( 
      <Router>
      <div>  
        <h1>Home</h1>  
        <Switch>
              <Route exact path='/create' component={Create} />
              <Route exact path='/recordList' component={RecordList} />
              <Route exact path='/edit/:id' component={Edit} />
           
          </Switch>
        </div>
      </Router>
    ); 
  }  
}  
export default App  