import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Trips from './Pages/Trips';
import News from './Pages/News';
import Page from './Layout/Page';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch id="routes">
          <Route exact path="/" render={props => <Page> <Home /> </Page>} />
          <Route path="/trips" render={props => <Page> <Trips /> </Page>} />
          <Route path="/news" render={props => <Page> <News /> </Page>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
