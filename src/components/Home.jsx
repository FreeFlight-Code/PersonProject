import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {profile} from './server/server.js';
import deflogo  from '../images/def_logo.png';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Homepage">
        <img src={deflogo} className="def_logo" alt="logo" />
        
        <Link to="/Portfolio"><div className="portfolio_link">ENTER</div></Link>
      </div>
    );
  }
}

export default Home;
