import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StatsPage from './containers/WorldwideStats';
import StatsDetails from './containers/StatsDetails';
import './App.css';


function App() {
  return (
    <Router>
      <h1>CORONA VIRUS DISEASE 19 (COVID-19) STATISTICS</h1>
      <Switch>
        <Route path="/" exact component={StatsPage} />
        <Route path="/stat/:country" component={StatsDetails} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
