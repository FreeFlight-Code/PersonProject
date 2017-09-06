import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_More.scss';
import deflogo  from '../images/def_logo.png';

class More extends Component {
  render() {
    return (
      <div className="More">
        <Link to="/" className="link"><img className='deflogo' src={deflogo} alt="logo"/></Link>
        Codepen, CodeWars, Github links
        </ div>
      
    );
  }
}

export default More;
