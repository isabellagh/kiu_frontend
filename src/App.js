import React from 'react';
import { connect } from 'react-redux';
// import { fetchUsers } from './actions/fetchUsers';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import UserNavBar from './components/navbar/UserNavBar';
import NavBar from './components/navbar/NavBar';
import Welcome from './components/welcome/Welcome';
import { getCurrentUser } from './actions/currentUser';
import Logout from './components/logout/Logout';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <div className='App'>
        {loggedIn ? <UserNavBar /> : <NavBar />}
        <Welcome />
        <Login />
        <Logout />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
