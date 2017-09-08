import React, { Component } from 'react';
import '../styles/_Scheduler.scss';
import Form from './Form';

class Scheduler extends Component {
  render() {
    return (
      <div className="Scheduler">
          
            Scheduler client or customer ID
          < Form />
         
      </div>
    );
  }
}

export default Scheduler;
