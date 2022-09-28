import axios from 'axios';
import linkURL from '../url';

const GET_MY_RESERVATIONS = '/redux/GET_MY_RESERVATIONS';
const CANCEL_RESERVATION = '/redux/CANCEL_RESERVATION';

const getReservationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MY_RESERVATIONS: {
      const myReservations = action.reservations;
      return myReservations;
    }
    case CANCEL_RESERVATION: {
      const newReservations = state.filter((bike) => bike.reservation_id !== action.id);
      return newReservations;
    }
    default:
      return state;
  }
};

export const getMyReservations = (userID, token) => (dispatch) => {
  axios.get(`${linkURL}/api/v1/motorcycle/${userID}/reservation/${userID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => dispatch(
      {
        type: GET_MY_RESERVATIONS,
        reservations: response.data,
      },
    ));
};

export const cancelReservation = (id, token) => (dispatch) => {
  axios.delete(`${linkURL}/api/v1/motorcycle/${id}/reservation/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => dispatch(
    {
      type: CANCEL_RESERVATION,
      id,
    },
  ));
}

export default getReservationsReducer;
