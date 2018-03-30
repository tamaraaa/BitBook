import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Switch, Route } from "react-router-dom"
import { Feed } from './Feed'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Switch>
          <Route exact path='/' component={Feed} />
        </Switch>

        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
