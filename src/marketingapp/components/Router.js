import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import LatestNews from './LatestNews';
// import Testimonials from './Testimonials';
// import AboutUs from './AboutUs';
// import Login from './Login';
import Home from './Home';
// import '../main.css'



class Router extends Component {
  render() {
    return (
      <div className="Router">
          <Switch> 
            <Route component={ Home } path="/marketing/home"/>                
            {/* <Route component={ LatestNews } path="/marketing/latestNews" />
            <Route component={ Testimonials } path="marketing/testimonials" />
            <Route component={ AboutUs } path="marketing/aboutUs" /> 
            <Route component={ Login } path="marketing/login" /> */}
          </Switch>     
            
      </div>
    );
  }
}

export default Router;