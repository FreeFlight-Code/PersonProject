import React, { Component } from 'react';
import '../styles/_More.scss';
import deflogo  from '../images/def_logo.png';
class More extends Component {
  render() {
    return (
      <div className="More">
        <img className='deflogo' src={deflogo} alt="logo"/>
        Codepen, CodeWars, Github links
        </ div>
      
    );
  }
}

export default More;
