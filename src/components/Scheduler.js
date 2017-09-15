import React, { Component } from 'react';
import '../styles/_Scheduler.scss';
import BusinessForm from './BusinessForm';
import ClientForm from './ClientForm';

class Scheduler extends Component {
  constructor(props){
    super(props)
    this.state= {
      auth: this.props.auth
    }
  }
  
  componentDidMount(){console.log(this.props.auth)}
  render() {
    return (
      <div className="Scheduler">
        <a href='/auth/logout'>
            <button className='logout_button'>log out</button>
          </a>
      { this.props.auth === 'business' ?
          < BusinessForm /> :
          < ClientForm /> }
          


         
      </div>
    );
  }
}

export default Scheduler;
