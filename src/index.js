import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio.jsx'
import Scheduler from './components/Scheduler.js'
import Login from './components/Login.jsx'
import './styles/index.css';

ReactDOM.render(


            (<Router >
                <Switch>
                    <Route component={ Home } path="/" exact />                
                    <Route component={ Portfolio } path="/Portfolio" />
                    <Route component={ Login } path="/Login" />
                    <Route component={ Scheduler } path="/Login/Scheduler" />
                </Switch>   
            </Router>)

    , document.getElementById('root'));


