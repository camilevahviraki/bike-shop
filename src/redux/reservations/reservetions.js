import axios from 'axios';
import linkURL from '../url';

const GET_MY_RESERVATIONS = '/redux/GET_MY_RESERVATIONS';

const getReservationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MY_RESERVATIONS: {
      const myReservations = action.reservations.filter((bike) => bike.r_user_id == action.userID);
      return myReservations;
    }
    default:
      return state;
  }
};

export const getMyReservations = (userID, token) => (dispatch) => {
  axios.get(`${linkURL}/api/v1/reservation`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(
      {
        type: GET_MY_RESERVATIONS,
        reservations: response.data.reservations,
        userID,
      },
    ));
};

export default getReservationsReducer;
