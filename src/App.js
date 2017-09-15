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

  constructor(props){
    super(props)
    this.state = {
      auth: 'unset'
    }
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  setUserInfo (info) {
    alert(info);
    this.setState({
      auth: info
    })
  }

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
                    <Route render={ props => <Scheduler {...props} auth={this.state.auth}/>} path="/login/scheduler" />
                    <Route render={ props => <Login {...props} setUserInfo={this.setUserInfo}/>} path="/login" />
                    <Route component={ Home } path="/" exact />                
                </Switch>            
      </div>
    );
  }
}

export default App;
