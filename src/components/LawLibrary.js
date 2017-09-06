import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_LawLibrary.scss';
import deflogo  from '../images/def_logo.png';

class LawLibrary extends Component {
  render() {
    return (
      <div className="LawLibrary">
        <Link to="/" className="link"><img classNmae='deflogo' src={deflogo} alt="logo"/></Link>
        Content coming soon
        </ div>
      
    );
  }
}

export default LawLibrary;
