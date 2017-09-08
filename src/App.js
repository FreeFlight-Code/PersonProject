import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Scheduler from './components/Scheduler';
import Login from './components/Login';
import More from './components/More';
import LawLibrary from './components/LawLibrary';
import Marketing from './components/Marketing';
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
           <Switch>
                    <Route component={ Portfolio } path="/portfolio" />
                    <Route component={ More } path="/more" />
                    <Route component={ LawLibrary } path="/lawlibrary" />
                    <Route component={ Scheduler } path="/login/scheduler" />
                    <Route component={ Marketing } path="/marketing/home" />
                    <Route component={ Login } path="/login" />
                    <Route component={ Home } path="/" exact />                
                </Switch>            
      </div>
    );
  }
}

export default App;
