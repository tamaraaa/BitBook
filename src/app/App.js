import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Switch, Route } from "react-router-dom"
import { Feed } from './Feed'
import { Button } from './button'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <main>
            <div className="container">
              <Route exact path='/' component={Feed} />

            </div>
          </main>
        </Switch>
        <Button />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
