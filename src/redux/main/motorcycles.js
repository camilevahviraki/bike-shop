import axios from 'axios';

const MOTORCYCLES = '/redux/MOTORCYCLES';
const DELETE_MOTORCYCLES = '/redux/DELETE_MOTORCYCLES';
const RESERVE_BIKE = '/redux/RESERVE_BIKE';

const motorcyclesReducer = (state = [], action) => {
  switch (action.type) {
    case MOTORCYCLES:
      return action.motorcycles;
    case DELETE_MOTORCYCLES: {
      const newState = state.filter((bike) => bike.id !== action.id)
      return newState
    }
    case RESERVE_BIKE: {
      let newState = [];
      state.forEach((bike) => {
        if(bike.id === action.id){
          bike.reserved = !bike.reserved;
        }
        newState = [...newState, bike];
      })

      return newState;
    }
    default:
      return state;
  }
};

export const fetchMotorcycles = (varToken) => (dispatch) => {
  axios.get('http://localhost:3000/api/v1/motorcycle',
  {
    headers: {
      Authorization: 'Bearer ' + varToken
     }
  }
  )
    .then((response) => dispatch(
      {
        type: MOTORCYCLES,
        motorcycles: response.data,
      },
    ));
};

export const removeMotorcycle = (id, token) => (dispatch) => {
  axios.delete(`http://localhost:3000/api/v1/motorcycle/${id}`,
  {
    headers: {
      Authorization: 'Bearer ' + token
     }
  })
    .then((response) => dispatch(
      {
        type: DELETE_MOTORCYCLES,
        id: id,
      },
    ));
};

export const reserveMotorcycle = (id, token) => (dispatch) => {
  axios.put(`http://localhost:3000/api/v1/reservation/${id}`,{
    motorcycle_id: id, 
  },
  {
    headers: {
      Authorization: 'Bearer ' + token
     }
  }
  )
    .then((response) => dispatch(
      {
        type: RESERVE_BIKE,
        id,
      },
    ));
};

export default motorcyclesReducer;
