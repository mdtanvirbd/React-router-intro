import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav>
      <ul className='container-1'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="/posts">Post</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
