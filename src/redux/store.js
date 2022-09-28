import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from './logger/logger';
import logger from './logger/thunk';
import motorcyclesReducer from './main/motorcycles';
import addMotorCycleReducer from './add/addItem';
import detailsMotorcycleReducer, { currentLinkReducer } from './details/details';
import authenticationReducer, { isLogedInReducer } from './authentication/login';
import IsNavbarVisible from './navbar/navbar';
import getReservationsReducer from './reservations/reservetions';

const rootReducer = combineReducers({
  motorcyclesReducer,
  addMotorCycleReducer,
  detailsMotorcycleReducer,
  authenticationReducer,
  IsNavbarVisible,
  currentLinkReducer,
  getReservationsReducer,
  isLogedInReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
