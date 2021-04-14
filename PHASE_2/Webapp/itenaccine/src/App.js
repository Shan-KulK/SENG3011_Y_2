import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch id="routes">
          <Route exact path="/" render={props => <> <Home /> </>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
