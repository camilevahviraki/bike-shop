import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import userAvatar from '../../icons/user-avatar.jpg';
import { setNavVisible } from '../../redux/navbar/navbar';

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: 'username',
      loggedOut: false,
    };
  }

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData.user) {
      this.setState({ userCredentials: savedData.user.username });
    }
  }

  logout = () => {
    // localStorage.setItem('userData', '{}');
    // this.setState({loggedOut: true});
  }

  render() {
    const { user } = this.state.userCredentials;
    console.log('user', this.state.userCredentials);
    if (this.state.loggedOut) {
      return (
        <Navigate to="../login" />
      );
    }
    return (
      <div className="userAcoount-container">
        <Link to="/" onClick={() => this.props.setNavVisible(true)}>
          {'< Back To Menu'}
        </Link>
        <div className="user-avatar-wrap">
          <img src={userAvatar} alt="" className="user-avatar" />
        </div>
        <h2 className="UserName">{this.props.userLoged.user.username}</h2>
        <button
          type="button"
          onClick={() => this.logout()}
          className="logOut"
        >
          Logout
        </button>
      </div>
    );
  }
}

const mapState = (state) => ({
  userLoged: state.authenticationReducer,
});

const mapDispatch = (dispatch) => ({
  setNavVisible: (bool) => dispatch(setNavVisible(bool)),
});

export default connect(mapState, mapDispatch)(UserAccount);
