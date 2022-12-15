const initialState = {
  users: [],
  loading: true,
  errorMessage: '',
};

export const GET_USERS = 'GET_USERS';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

const reducer = (
  state = initialState,
  action: {type: string; loading: boolean; payload: any},
) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, loading: action.payload};
    case GET_USERS_FULFILLED:
      return {...state, users: action.payload, loading: action.loading};
    case GET_USERS_REJECTED:
      return {
        ...state,
        errorMessage: action.payload?.message || 'Server error',
        loading: action.loading,
      };
    case ADD_USER:
      return {...state, users: [action.payload, ...state.users]};
    case REMOVE_USER:
      return {
        ...state,
        users: [
          ...state.users.slice(0, action.payload),
          ...state.users.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
