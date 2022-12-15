import {Middleware} from 'redux';
import axios from 'axios';
import {getUsersFulfilled, getUsersRejected} from './actions';

export const fetchActionMiddleware: Middleware = () => next => action => {
  if (action.type === 'GET_USERS') {
    next(action);
    axios
      .get('https://dummyjson.com/users')
      .then(res => {
        next(getUsersFulfilled(res.data.users));
      })
      .catch(err => {
        next(getUsersRejected(err));
      });
  }

  return next(action);
};
