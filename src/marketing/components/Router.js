import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import LatestNews from './LatestNews';
// import Testimonials from './Testimonials';
// import Login from './Login';
import AboutUs from './AboutUs';
import Home from './Home';



class Router extends Component {
  render() {
    return (
      <div className="Router">
          <Switch> 
            {/* <Route component={ LatestNews } path="/marketing/LatestNews" />
            <Route component={ Testimonials } path="/marketing/Testimonials"/>
            <Route component={ Login } path="/Login" /> */}
            <Route component={ AboutUs } path="/marketing/AboutUs" /> 
            <Route component={ Home } path="/marketing" />                
          </Switch>     
            
      </div>
    );
  }
}

export default Router;