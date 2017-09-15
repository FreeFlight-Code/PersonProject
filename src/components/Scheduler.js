import React, { Component } from 'react';
import '../styles/_Scheduler.scss';
import BusinessForm from './BusinessForm';
import ClientForm from './ClientForm';

class Scheduler extends Component {
  constructor(props){
    super(props)
    this.state = ({
      email: this.props.auth.email,
      businessName: this.props.auth.businessName,
      business_id: this.props.auth.business_id,
      link: this.props.auth.link,
      logo: this.props.auth.logo,
      auth: this.props.auth.auth
    })
 
  }
  


  componentDidMount(){
    console.log (this.state, 'state on scheduler')
  }
  render() {
    return (
      <div className="Scheduler">
        <div className="schedulerHeader">
          Welcome {this.state.email}!
        </div>
        <a href='/auth/logout'>
            <button className='logout_button'>log out</button>
          </a>
      { this.state.auth === 'business' ?
          < BusinessForm /> :
          < ClientForm /> } 
           {/* < ClientForm /> */}


         
      </div>
    );
  }
}

export default Scheduler;
