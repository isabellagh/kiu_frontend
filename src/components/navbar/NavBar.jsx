import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className='fixed'>
      <ul className='main-nav'>
        <li>
          <a href='/'>KIU</a>
        </li>
        <li>
          <a href='/'>Trainers</a>
        </li>
        <li>
          <a href='/'>WHR Calculator</a>
        </li>
        <li className='left'>
          <a href='/'>LogIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
