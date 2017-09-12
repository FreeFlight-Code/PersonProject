import React, { Component } from 'react';
import '../styles/_Login.scss';
import {axios} from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = ({
      username: "",
      password: ""
    })
    this.handlelogin = this.handlelogin.bind(this);
  }

handlelogin() {
  axios.post(`/custom_auth`, {
    username: this.state.username,
    password: this.state.username
  })
}

  render() {
    return (
      <div className="Login">
          <div className='title'>
            Your Custom Business Scheduler
          </div>  
            
           <a href={'http://localhost:3030/auth'}>
            <button className='login_button'>LOG IN with Google</button>
          </a> 
          <input placeholder='username' type="text" onChange={(event) => {
            this.setState({
              username: event.target.value
            })
          }} className="username" value={this.state.username}/>
          {/*~~~~~~~~~~~~~~~  buttons separator    ~~~~~~~~~~~~~~~~~~*/}
          <input placeholder='password' type="text" onChange={(event) => {
            this.setState({
              password: event.target.value
            })
          }} className="password" value={this.state.password}/>
          
            <button onClick={this.handlelogin} className='login_button'>LOG IN CUSTOM</button>
           
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
