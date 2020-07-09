import React from 'react';
import { Route, BrowserRouter as Router, Switch, HashRouter } from "react-router-dom";
import Home from "./Home";
import Restaurants from './Restaurants';

function App() {
  return (
    <div>
      
        <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={Restaurants} />
        
      {/* <Router>
        <Switch>
         
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
