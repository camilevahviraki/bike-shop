/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { userSignup } from '../../redux/authentication/login';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  submit = () => {
    if (this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({ message: 'Please, Fill all field to Signup' });
    } else if (this.state.username.length === 0) {
      this.setState({ message: 'Username can\'t be blanck' });
    } else if (this.state.password.length === 0) {
      this.setState({ message: 'Password can\'t be blanck' });
    } else {
      this.setState({ message: '' });
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.userSignup(data);
    }
  }

  render() {
    if (this.props.isSignedUp.status) {
      return (<Navigate to="../main" />);
    }
    return (
      <div className="Login-form-container">
        <h2 className="Login-title">Signup</h2>
        <div className="Login-form">
          <input
            type="text"
            className="login-name"
            id="username"
            placeholder="your name"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            id="password"
            className="login-password"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit" onClick={() => this.submit()}>Signup</button>
          <p className="login-message">{this.state.message}</p>
        </div>
        <div className="dont-have-account">
          <p>Allready have an account?</p>
          <Link to={this.props.isLogedIn ? '../login' : '../main'}>Sign In</Link>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  userSignup: (data) => dispatch(userSignup(data)),
});

const mapState = (state) => ({
  authToken: state.authenticationReducer,
  isSignedUp: state.isLogedInReducer,
});

export default connect(mapState, mapDispatch)(Signup);
