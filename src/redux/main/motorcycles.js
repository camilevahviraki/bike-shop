import axios from 'axios';
import linkURL from '../url';

const MOTORCYCLES = '/redux/MOTORCYCLES';
const DELETE_MOTORCYCLES = '/redux/DELETE_MOTORCYCLES';
const RESERVE_BIKE = '/redux/RESERVE_BIKE';

const motorcyclesReducer = (state = [], action) => {
  switch (action.type) {
    case MOTORCYCLES:
      return action.motorcycles;
    case DELETE_MOTORCYCLES: {
      const newState = state.filter((bike) => bike.id !== action.id);
      return newState;
    }
    case RESERVE_BIKE: {
      let newState = [];
      state.forEach((bike) => {
        if (bike.id === action.id) {
          bike.reserved = !bike.reserved;
        }
        newState = [...newState, bike];
      });

      return newState;
    }
    default:
      return state;
  }
};

export const fetchMotorcycles = (varToken) => (dispatch) => {
  axios.get(`${linkURL}/api/v1/motorcycle`,
    {
      headers: {
        Authorization: `Bearer ${varToken}`,
      },
    })
    .then((response) => dispatch(
      {
        type: MOTORCYCLES,
        motorcycles: response.data,
      },
    ));
};

export const removeMotorcycle = (id, token) => (dispatch) => {
  axios.delete(`${linkURL}/api/v1/motorcycle/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(
      {
        type: DELETE_MOTORCYCLES,
        id,
      },
    ));
};

export const reserveMotorcycle = (data, token) => (dispatch) => {
  axios.post(`${linkURL}/api/v1/motorcycle/${data.id}/reservation`, {
    reserve: data,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => dispatch(
      {
        type: RESERVE_BIKE,
        id: data.motorcycle_id,
      },
    ));
};

export default motorcyclesReducer;
