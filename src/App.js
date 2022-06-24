import React from 'react';
import { connect } from 'react-redux';
// import { fetchUsers } from './actions/fetchUsers';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import Welcome from './components/welcome/Welcome';
import { getCurrentUser } from './actions/currentUser';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Welcome />
        <Login />
        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     loggedIn: !!state.currentUser,
//   };
// };

export default connect(null, { getCurrentUser })(App);
// export default connect(mapStateToProps, { getCurrentUser })(App);
