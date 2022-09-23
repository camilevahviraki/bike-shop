import axios from 'axios';

const NEW_MOTORCYCLE = '/redux/NEW_MOTORCYCLE';

const addMotorCycleReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_MOTORCYCLE:
      return action.motorcycle;
    default:
      return state;
  }
};

export const addMotorcycle = (newMotorcycle, token) => (dispatch) => {
  axios.post('http://localhost:3000/api/v1/motorcycle', {
    motorcycle: newMotorcycle,
  },
  {
    headers: {
      Authorization: 'Bearer ' + token
     }
  })
    .then((response) => dispatch(
      {
        type: NEW_MOTORCYCLE,
        motorcycle: response.data,
      },
    ));
};

export default addMotorCycleReducer;