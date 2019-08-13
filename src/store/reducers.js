import { combineReducers } from 'redux';
import { taskReducer } from './task/reducers';

export default combineReducers({
    tasks: taskReducer
});
