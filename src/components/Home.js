import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import deflogo  from '../images/def_logo.png';
import '../styles/_Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Homepage">
        <img src={deflogo} className="def_logo" alt="logo" />
        <div className="menuholder">
        <Link to="/Portfolio"><div className='home_menu portfolio_home'>Portfolio</div></Link>
          <div className='home_menu social'>Social</div>
          <div className='home_menu contact'>Contact</div>
        </div>
      </div>

    );
  }
}

export default Home;
