import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Switch, Route } from "react-router-dom"
import { Main } from './Main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className="container">
            <Main />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
