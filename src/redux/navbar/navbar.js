const SET_NAVABAR = '/redux/SET_NAVABAR';

const IsNavbarVisible = (state = {status: true}, action) => {
  switch (action.type) {
    case SET_NAVABAR:
      return {status: action.navStatus};
    default:
      return state;
  }
};

export const setNavVisible = (navStatus) => (dispatch) =>(
     dispatch(
        {
            type: SET_NAVABAR,
            navStatus,
          }
     )
);

export default IsNavbarVisible;