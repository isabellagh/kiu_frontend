import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/usersReducer';
import currentUser from '../reducers/currentUser';
import loginForm from '../reducers/loginForm';

const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  // myClients,
  // signupForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
