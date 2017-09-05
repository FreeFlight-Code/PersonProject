import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
         Work Samples
         <Link to="/lawlibrary" className="link"><div className="lawlibrary">LAW LIBRARY</div></Link>
          <Link to="/marketing/home" className="link"><div className="marketing">MARKETING</div></Link>
          <Link to="/Login" className="link"><div className="portfolio_login">SCHEDULER</div></Link>
          <Link to="/more" className="link"><div className="more">MORE</div></Link>
         

      </div>
    );
  }
}

export default Portfolio;
