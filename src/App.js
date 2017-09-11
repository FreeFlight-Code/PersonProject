import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Scheduler from './components/Scheduler';
import Login from './components/Login';
import More from './components/More';
import LawLibrary from './components/LawLibrary';
import Marketing from './marketingapp/components/Home';
import LatestNews from './marketingapp/components/LatestNews';
import Testimonials from './marketingapp/components/Testimonials';
import AboutUs from './marketingapp/components/AboutUs';
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
           <Switch>
                    <Route component={ Portfolio } path="/portfolio" />
                    <Route component={ More } path="/more" />
                    <Route component={ LawLibrary } path="/lawlibrary" />
                    <Route component={ Marketing } path="/marketing/home" />     
                    <Route component={ LatestNews } path="/marketing/latestNews" /> 
                    <Route component={ Testimonials } path="/marketing/testimonials" />
                    <Route component={ AboutUs } path="/marketing/aboutUs" /> 
                    <Route component={ Scheduler } path="/login/scheduler" />
                    <Route component={ Login } path="/login" />
                    <Route component={ Home } path="/" exact />                
                </Switch>            
      </div>
    );
  }
}

export default App;
