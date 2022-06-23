import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({
  userReducer,
  // currentUser,
  // loginForm,
  // myClients,
  // signupForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
