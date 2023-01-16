import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import userAvatar from '../../icons/user-avatar.jpg';

const UserAccount = () => (
  <div className="userAcoount-container">
    <Link to="../main">
      {'< Back To Menu'}
    </Link>
    <div className="user-avatar-wrap">
      <img src={userAvatar} alt="" className="user-avatar" />
    </div>
    <h2 className="UserName">Azerty</h2>
    <div className="logout-wrap">
      <Link
        to="../"
        className="logOut"
      >
        Logout
      </Link>
    </div>
  </div>
);

export default UserAccount;
