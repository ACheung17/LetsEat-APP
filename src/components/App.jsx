import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Restaurants from './Restaurants';

function App() {
  return (
    <div>
        
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={Restaurants} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
