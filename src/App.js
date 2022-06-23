import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Welcome from './components/welcome/Welcome';

class App extends React.Component {
  componentDidMount() {
    // fetch('http://[::1]:3000/api/v1/users')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Welcome />
        <Footer />
      </div>
    );
  }

  // const mapStateToProps = (state) => {
  //   return {
  //     users: state.users
  //   }
  // }
}

export default connect(null, { fetchUsers })(App);
