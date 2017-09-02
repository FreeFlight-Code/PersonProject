import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
         Portfolio Page
         <div className="name">name</div>
         <div className="marketing">marketing</div>
         <Link to="/Login" className="link"><div className="login">Scheduler</div></Link>
         {/* <div className="more">MORE</div> */}
         

      </div>
    );
  }
}

export default Portfolio;
