import {
  GET_USERS,
  GET_USERS_FULFILLED,
  GET_USERS_REJECTED,
  ADD_USER,
  REMOVE_USER,
} from './reducer';

export const getUsers = (bool: boolean) => {
  return {
    type: GET_USERS,
    payload: bool,
  };
};

export const getUsersFulfilled = (data: any) => {
  return {
    type: GET_USERS_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const getUsersRejected = (error: string) => {
  return {
    type: GET_USERS_REJECTED,
    payload: error,
    loading: false,
  };
};

export const addUser = (data: {
  firstName: string;
  lastName: string;
  company: {
    title: string;
    age: number;
    address: string;
    postalCode: string;
    state: string;
  };
}) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const removeUser = (index: number) => {
  return {
    type: REMOVE_USER,
    payload: index,
  };
};
