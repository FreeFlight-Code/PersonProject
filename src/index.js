import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio.jsx'
import Scheduler from './components/Scheduler.js'
import Login from './components/Login.jsx'
import Marketing from './marketing/components/Router.js';

ReactDOM.render(


            (<Router >
                <Switch>
                    <Route component={ Portfolio } path="/portfolio" />
                    <Route component={ Marketing } path="/marketing/home" />
                    <Route component={ Scheduler } path="/login/scheduler" />
                    <Route component={ Login } path="/login" />
                    <Route component={ Home } path="/" exact />                
                </Switch>   
            </Router>)

    , document.getElementById('root'));


