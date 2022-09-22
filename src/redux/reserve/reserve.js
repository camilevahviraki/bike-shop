import axios from 'axios';



const reserveReducer = (state = "", action) => {
  switch (action.type) {
    case RESERVE_BIKE:
      return action.motorcycle;
    default:
      return state;
  }
};

export const reserveMotorcycle = (id) => (dispatch) => {
  axios.put(`http://localhost:3000/api/v1/reservations/${id}`,{
    motorcycle_id: id, 
  })
    .then((response) => dispatch(
      {
        type: RESERVE_BIKE,
        id,
      },
    ));
};

export default reserveReducer;