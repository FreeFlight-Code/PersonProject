import React, { Component } from 'react';
import '../styles/Login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="Login">
          <div className='title'>
            Your Custom Business Scheduler
          </div>  
            
           <a href={'http://localhost:3030/auth'}>
            <button className='login_button'>LOG IN</button>
          </a> 
           {/* <Link to="/login/scheduler" className="link">
            <button className='login_button'>LOG IN</button>
          </Link>  */}
          <a href='http://localhost:3030/auth/logout'>
            <button className='logout_button'>log out</button>
          </a>
          
          {/* <div className='login_form'>
              Email:
              <input type="text" name="email" placeholder="your@email.here"/>
              Password:
              <input type="text" name="password" placeholder="password"/>
              <Link to="/login/scheduler" className="link"><input type="submit" value="Submit"/></Link>
          </div> */}
          {/* <h1 className="name">{profile}</h1> */}
      </div>
    );
  }
}

export default Login;
