import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LatestNews from '../marketingapp/components/LatestNews';
import Testimonials from '../marketingapp/components/Testimonials';
import AboutUs from '../marketingapp/components/AboutUs';
import Login from '../marketingapp/components/Login';
import Home from '../marketingapp/components/Home';
import '../marketingapp/marketing_main.css'



class Marketing extends Component {
  render() {
    return (
      <div className="Marketing">
          <Switch> 
            <Route component={ Home } path="/marketing/home"/>                
            <Route component={ LatestNews } path="/marketing/latestNews" />
            <Route component={ Testimonials } path="/marketing/testimonials" />
            <Route component={ AboutUs } path="/marketing/aboutUs" /> 
            <Route component={ Login } path="/marketing/login" />
          </Switch>     
            
      </div>
    );
  }
}

export default Marketing;