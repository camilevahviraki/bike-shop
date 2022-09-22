import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from './logger/logger';
import logger from './logger/thunk';
import motorcyclesReducer from './main/motorcycles';
import addMotorCycleReducer from './add/addItem';
import detailsMotorcycleReducer from './details/details';
import authenticationReducer from './authentication/login';

const rootReducer = combineReducers({
  motorcyclesReducer,
  addMotorCycleReducer,
  detailsMotorcycleReducer,
  authenticationReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
