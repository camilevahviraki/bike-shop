import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import userAvatar from '../../icons/user-avatar.jpg';

export default class UserAccount extends Component {
    constructor(props){
        super(props)
        this.state = {
            userCredentials: {},
            loggedOut: false,
        }
    }

  componentDidMount(){
    const savedData = JSON.parse(localStorage.getItem('userData'));
    this.setState({userCredentials: savedData});
  }

  logout =  () => {
    localStorage.setItem('userData', '{}');
    this.setState({loggedOut: true});
    // Location.reoload();
  }

  render() {
    const {user} = this.state.userCredentials;
    // const {username} = user; 
    if(this.state.loggedOut){
        return (
            <Navigate to="../login"/>
        )
    }
    return (
      <div className='userAcoount-container'>
         <button type='button'
          onClick={() => this.logout()}
         >
            Logout
         </button>
         <div className='user-avatar-wrap'>
            <img src={userAvatar} alt="" className='user-avatar'/>
         </div>
         {/* <h2>{user.username}</h2> */}
      </div>
    )
  }
}
