import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "materialize-css/dist/css/materialize.css";
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route } from "react-router-dom"
import { HashRouter } from 'react-router-dom'
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
