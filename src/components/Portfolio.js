import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_Portfolio.scss';
import deflogo  from '../images/def_logo.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <Link to="/" className="link"><img src={deflogo} alt="logo" className='deflogo'/></Link>
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
