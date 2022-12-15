import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fetchActionMiddleware} from './middleware';
import reducer from './reducer';

export default createStore(
  reducer,
  applyMiddleware(thunk, fetchActionMiddleware),
);
