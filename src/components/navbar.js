import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <header>
      <div className="navbar d-flex">
        <div className="navTitle d-flex">
          <h1>Bike Shop</h1>
        </div>

        <div className="navMenu d-flex">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>Motorcycles</span>
          </NavLink>

          <NavLink to="Reserve" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>Reserve</span>
          </NavLink>

          <NavLink to="MyReservation" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>My Reservations</span>
          </NavLink>

          <NavLink to="AddItem" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>Add Item</span>
          </NavLink>

          <NavLink to="RemoveItem" className={({ isActive }) => (isActive ? 'rocket active' : 'rocket link')}>
            <span>Remove Item</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
