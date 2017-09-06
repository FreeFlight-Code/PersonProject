import React, { Component } from 'react';
import '../styles/_LawLibrary.scss';
import deflogo  from '../images/def_logo.png';

class LawLibrary extends Component {
  render() {
    return (
      <div className="LawLibrary">
        <img classNmae='deflogo' src={deflogo} alt="logo"/>
        Content coming soon
        </ div>
      
    );
  }
}

export default LawLibrary;
