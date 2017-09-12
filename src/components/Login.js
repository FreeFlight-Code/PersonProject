import React, { Component } from 'react';
import '../styles/_Login.scss';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = ({
      email: "",
      password: ""
    })
    this.handlelogin = this.handlelogin.bind(this);
  }

handlelogin() {
  console.log(this.state.email);
  console.log(this.state.password);
  if (!this.state.email || !this.state.password ) alert('Must enter a email and password!!!')
  if (this.state.email && this.state.password )
  {axios.post(`http://localhost:3030/custom_auth`, {
    email: this.state.email,
    password: this.state.password
  })}
  // console.log(this.state.email);
  // console.log(this.state.password);
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
          <input placeholder='email' type="text" onChange={(event) => {
            this.setState({

              email: event.target.value
            })
          }} className="email" value={this.state.email}/>
          {/*~~~~~~~~~~~~~~~  buttons separator    ~~~~~~~~~~~~~~~~~~*/}
          <input placeholder='password' type="text" onChange={(event) => {
            this.setState({
              password: event.target.value
            })
          }} className="password" value={this.state.password}/>
          
            <button onClick={this.handlelogin} className='login_button'>LOG IN CUSTOM</button>
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
