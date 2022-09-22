import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../redux/authentication/login';
import './login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            message: '',
        }
    }
  
  submit = () => {
    if(this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({message: 'Please, Fill all field to login'})
    }else if( this.state.username.length === 0 ) {
      this.setState({message: 'Username can\'t be blanck'})
    }else if(this.state.password.length === 0) {
      this.setState({message: 'Password can\'t be blanck'})
    }else {
      this.setState({message: ''})
      const data = {
        username: this.state.username,
        password: this.state.password,
      }
      this.props.userLogin(data);
    }
  }
    
  render() {
    console.log('Token =>',this.props.authToken)
    if(this.props.authToken.user) {
      localStorage.setItem("userData", JSON.stringify(this.props.authToken));
    }

    // if(this.props.isLogedIn){
    //   return (
    //     <Navigate to="/" />
    //   )
    // }
    return (
      <div className="Login-form-container">
        <h2 className="Login-title">Login</h2>
          <div className="Login-form">
         <input
           type="text"
           className="login-name"
           id="username"
            placeholder='your name'
           onChange={(e) => this.setState({username: e.target.value})}
         />
           <input
           type="password"
           id="password"
           className="login-password"
            placeholder='Password'
           onChange={(e) => this.setState({password: e.target.value})}
         />
         <button type="submit" onClick={() => this.submit()}>Login</button>
         <p className="login-message">{this.state.message}</p>
         <p 
            className="Success-message"
            style={this.props.authToken.error? {display: 'flex'}:{display: 'none'}}
          >
            Wrong Combination of Username/Password
          </p>
      </div>
      <div className='dont-have-account'>
        <p className='Login-message'>Don't have an account?</p>
        <Link to='../signup'>Signup</Link>
      </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  userLogin: (data) => dispatch(userLogin(data)),
})

const mapState = (state) => ({
  authToken: state.authenticationReducer,
})


export default connect(mapState, mapDispatch)(Login);
