import React, { Component } from 'react';
import '../styles/_Login.scss';
import axios from 'axios';
// import deflogo_login from '../images/def_logo.png';
class Login extends Component {

  componentWillMount() {
    let params = this.props.location.pathname.split('/').pop();
    axios.get('http://localhost:3030/api/business/' + params)
      .then((res) => {
        console.log(res.data[0])
        this.setState({
          businessName: res.data[0].business_name,
          link: res.data[0].redirect,
          logo: res.data[0].logo,
          business_id: res.data[0].id
        })
      })
  }

  constructor(props) {
    super(props)
    this.state = ({
      email: "",
      password: "",
      businessName: "",
      business_id: "",
      link: "unavailable",
      logo: "",
      profile: ""
    })
    this.handlelogin = this.handlelogin.bind(this);
  }

  handlelogin() {
    // console.log(this.state.email);
    // console.log(this.state.password);
    if (!this.state.email || !this.state.password) alert('Must enter a email and password!!!')
    if (this.state.email && this.state.password) {
      axios.post(`http://localhost:3030/client_auth`, {
        email: this.state.email,
        password: this.state.password,
        business_id: this.state.business_id
      })
      
    }
    console.log(this.state);
    // console.log(this.state.password);
  }

  render() {





    return (
      <div className="Login">
        <img className='loginLogo' src={this.state.logo} alt='DEF' />
        <div className='loginBusinessName'>
          {this.state.businessName}<div id="titlesubtext">Custom Scheduler</div>
        </div>

        <a href={'http://localhost:3030/auth'}>
          <button className='google_login_button'>LOG IN with Google</button>
        </a>
        <input placeholder='email' type="text" onChange={(event) => {
          this.setState({

            email: event.target.value
          })
        }} className="email" value={this.state.email} />
        {/*~~~~~~~~~~~~~~~  buttons separator    ~~~~~~~~~~~~~~~~~~*/}
        <input placeholder='password' type="text" onChange={(event) => {
          this.setState({
            password: event.target.value
          })
        }} className="password" value={this.state.password} />

        <button onClick={this.handlelogin} className='custom_login_button'>LOG IN CUSTOM</button>

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
