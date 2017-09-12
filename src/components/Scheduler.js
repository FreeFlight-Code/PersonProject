import React, { Component } from 'react';
import '../styles/_Scheduler.scss';
import Form from './Form';

class Scheduler extends Component {
  render() {
    return (
      <div className="Scheduler">
        <a href='/auth/logout'>
            <button className='logout_button'>log out</button>
          </a>
          < Form />
         
      </div>
    );
  }
}

export default Scheduler;
