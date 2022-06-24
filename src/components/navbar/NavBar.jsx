import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';
// import Login from '../login/Login';
// import Logout from '../logout/Logout';

const NavBar = ({ loggedIn }) => {
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
          <a href='/login'>LogIn</a>
          {/* {loggedIn ? <Logout /> : <a href='/login'>LogIn</a>} */}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (currentUser) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
