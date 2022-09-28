import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useAvatar from '../icons/avatar_account.png';
import { setNavVisible } from '../redux/navbar/navbar';
import '../css/navbar.css';

function Navbar() {
  const navVisible = useSelector((state) => state.IsNavbarVisible.status);
  const dispatch = useDispatch();
  return (
    <header>
      <div className="navbar" style={navVisible ? { display: 'flex' } : { display: 'none' }}>
        <div className="navTitle">
          <h1>Bike Shop</h1>
        </div>

        <div className="navMenu">
          <NavLink to="/main" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
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
      <div className="see-account-img-wrap">
        <Link to="user" onClick={() => dispatch(setNavVisible(false))}>
          <img src={useAvatar} alt="" className="see-account-img" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
