import React from 'react';
import { NavLink } from 'react-router-dom';
import useAvatar from '../icons/avatar_account.png';
import '../css/navbar.css';

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="navTitle">
          <h1>Bike Shop</h1>
        </div>
        <div className='see-account-img-wrap'>
          <NavLink to="user">
            <img src={useAvatar} alt="" className='see-account-img' />
          </NavLink>
        </div>

        <div className="navMenu">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>MOTORCYCLES</span>
          </NavLink>

          <NavLink to="Reserve" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>RESERVE</span>
          </NavLink>

          <NavLink to="MyReservation" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>MY RESERVATIONS</span>
          </NavLink>

          <NavLink to="AddItem" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>ADD ITEM</span>
          </NavLink>

          <NavLink to="RemoveItem" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>REMOVE ITEM</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
