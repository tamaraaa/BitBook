import React, { Component } from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Switch, Route } from "react-router-dom"
import { Feed } from './Feed'
import { Button } from './button'
import {TextModal} from './TextModal'
import {VideoModal} from './VideoModal'
import {ImgModal} from './ImgModal'

class App extends Component {

  openModal = () =>{
    console.log('bla')}
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
        <ImgModal/>
         <VideoModal/> 
        <TextModal/>
        <Button openModal={this.openModal} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
