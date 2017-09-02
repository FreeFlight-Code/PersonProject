import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {profile} from './server/server.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      
        <h2>DeF Designs</h2>
        <Link to="/Portfolio" className="link"><div className="Portfolio">ENTER</div></Link>
        
      </div>
    );
  }
}

export default Home;
