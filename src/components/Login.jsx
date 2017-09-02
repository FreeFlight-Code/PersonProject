import React, { Component } from 'react';
import '../styles/Login.css';
// import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <div className='title'>
            Book 'em Scheduler
          </div>  
            
          <a href='http://localhost:3030/auth'><button className='login_button'>LOG IN</button></a>
          <a href='http://localhost:3030/auth/logout'><button className='logout_button'>log out</button></a>
          {/* <h1 className="name">{profile}</h1> */}
      </div>
    );
  }
}

export default Login;
