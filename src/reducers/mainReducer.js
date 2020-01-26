import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
    loginReducer,
    employeeReducer
});