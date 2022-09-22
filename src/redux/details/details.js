import axios from 'axios';

const DETAILS_MOTORCYCLE = '/redux/DETAILS_MOTORCYCLE';
const RESERVE_BIKE_DETAILS = '/redux/RESERVE_BIKE_DETAILS';

const detailsMotorcycleReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAILS_MOTORCYCLE:
      return action.motorcycle;
    case RESERVE_BIKE_DETAILS: {
      let newState = state;
      newState.reserved = !newState.reserved
      newState = {...newState, updated: true}
      return newState;
    }  
    default:
      return state;
  }
};

export const detailsMotorcycle = (id) => (dispatch) => {
  axios.get(`http://localhost:3000/api/v1/motorcycle/${id}`)
    .then((response) => dispatch(
      {
        type: DETAILS_MOTORCYCLE,
        motorcycle: response.data,
      },
    ));
};

export const reserveMotorcycle = (id) => (dispatch) => {
  axios.put(`http://localhost:3000/api/v1/reservations/${id}`,{
    motorcycle_id: id, 
  })
    .then((response) => dispatch(
      {
        type: RESERVE_BIKE_DETAILS,
        id,
      },
    ));
};

export default detailsMotorcycleReducer;