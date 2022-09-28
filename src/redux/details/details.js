import axios from 'axios';
import linkURL from '../url';

const DETAILS_MOTORCYCLE = '/redux/DETAILS_MOTORCYCLE';
const RESERVE_BIKE_DETAILS = '/redux/RESERVE_BIKE_DETAILS';
const CURRENT_DETAILS_LINK = '/redux/CURRENT_DETAILS_LINK';

export const currentLinkReducer = (state = 'details', action) => {
  switch (action.type) {
    case CURRENT_DETAILS_LINK:
      return action.link;
    default:
      return state;
  }
};

const detailsMotorcycleReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAILS_MOTORCYCLE:
      return action.motorcycle;
    case RESERVE_BIKE_DETAILS: {
      let newState = state;
      newState.reserved = !newState.reserved;
      newState = { ...newState, updated: true };
      return newState;
    }
    default:
      return state;
  }
};

export const setDetailsLink = (link) => (dispatch) => {
  dispatch({
    type: CURRENT_DETAILS_LINK,
    link,
  });
};

export const detailsMotorcycle = (id, varToken) => (dispatch) => {
  axios.get(`${linkURL}/api/v1/motorcycle/${id}`,
  {
    headers: {
      Authorization: `Bearer ${varToken}`,
    },
  })
    .then((response) => dispatch(
      {
        type: DETAILS_MOTORCYCLE,
        motorcycle: response.data,
      },
    ));
};

export const reserveMotorcycle = (id) => (dispatch) => {

dispatch(
  {
    type: RESERVE_BIKE_DETAILS,
    id,
  }
)
};

export default detailsMotorcycleReducer;
