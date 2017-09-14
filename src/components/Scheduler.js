import React, { Component } from 'react';
import '../styles/_Scheduler.scss';
// import BusinessForm from './BusinessForm';
import ClientForm from './ClientForm';

class Scheduler extends Component {
  render() {
    return (
      <div className="Scheduler">
        <a href='/auth/logout'>
            <button className='logout_button'>log out</button>
          </a>
          < ClientForm />
          {/* < BusinessForm /> */}
         
      </div>
    );
  }
}

export default Scheduler;
