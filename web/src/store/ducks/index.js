import { combineReducers } from 'redux';
import dataUserReducer from './dataUser';

const rootReducer = combineReducers({
	dataUser: dataUserReducer,
});

export default rootReducer;
