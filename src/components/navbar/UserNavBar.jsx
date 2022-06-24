// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import Logout from '../logout/Logout';
import './navbar.css';
// import Welcome from './Welcome';
// import Profile from './Profile';

const UserNavBar = ({ loggedIn }) => {
  return (
    <nav>
      <ul className='main-nav'>
        {/* <li>
            <NavLink activeClassName={classes.active} to='/clients'>
              My Clients
            </NavLink>
          </li> */}
        {/* <li> */}
        {/* <NavLink
              to='/profile'
              render={(props) =>
                loggedIn ? <Profile {...props} /> : <Welcome {...props} />
              }
            />
          </li>
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/clients'>My Clients</NavLink>
          </li>
          <li>
            <NavLink to='/clients/new'>Add Client</NavLink>
          </li>
          <li>
            <NavLink to='/trainers'>Trainers</NavLink>
          </li> */}
        <li className='left'>
          <a href='/'>LogOut</a>
        </li>
        <li>{loggedIn ? <Logout /> : null}</li>
      </ul>
    </nav>
  );
};

// const mapStateToProps = ({ currentUser }) => {
//   return {
//     currentUser,
//     loggedIn: !!currentUser,
//   };
// };

export default UserNavBar;
