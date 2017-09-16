import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import deflogo  from '../images/def_logo.png';
import '../styles/_Home.scss';
import bgvideo from '../videos/Rain_Fire.webm'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      display: false
    }
  }

  render() {
    return (
      <div className="Homepage">
        

 
        <video className='bgvideo_home' autoPlay muted loop data-state="play">
                                <source src={bgvideo} type="video/webm"/>
        </video>
        
        <img src={deflogo} className="deflogo_home" alt="logo" />
        <div className="menuholder">
        <Link to="/Portfolio"><div className='home_menu_portfolio'>Portfolio</div></Link>
          <div className='home_menu_social'>Social</div>
          <div className='home_menu_contact'>Contact</div>
        </div>
      </div>

    );
  }
}

export default Home;
