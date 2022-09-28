/* eslint-disable indent */
import axios from 'axios';
import linkURL from '../url';

const USER_LOGIN = '/redux/USER_LOGIN';
const USER_SIGNUP = '/redux/USER_SIGNUP';
const USER_LOGOUT = '/redux/USER_LOGOUT';

export const isLogedInReducer = (state = { status: false }, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      if (action.user.error) {
        return { status: false, userLogin: 'fail' };
      } return { status: true, userLogin: 'login' };
    }
    case USER_SIGNUP: {
      return { status: true, userLogin: 'Signup' };
    }
    case USER_LOGOUT: {
      return { status: false, userLogin: 'logout' };
    }
    default: {
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        if (savedData.includes('token')) {
          return { status: true };
        }
      }
      return state;
    }
  }
};

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return action.user;
    }
    case USER_SIGNUP:
      return action.user;
    case USER_LOGOUT:
      return {};
    default: {
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        if (savedData.includes('token')) {
          return JSON.parse(savedData);
        }
      }
      return state;
    }
  }
};

export const userLogin = (data) => (dispatch) => {
  axios.post(`${linkURL}/api/v1/login`, data)
    .then((response) => dispatch(
      {
        type: USER_LOGIN,
        user: response.data,
      },
    ));
};

export const userSignup = (data) => (dispatch) => {
  axios.post(`${linkURL}/api/v1/create`, data)
    .then((response) => dispatch(
      {
        type: USER_SIGNUP,
        user: response.data,
      },
    ));
};

export const userLogout = () => (dispatch) => {
  dispatch(
    {
        type: USER_LOGOUT,
      },
    );
};

export default authenticationReducer;
