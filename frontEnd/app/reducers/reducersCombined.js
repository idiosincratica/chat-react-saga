import { combineReducers } from 'redux';
import { configReducer } from "./configReducer";
import { messageReducer } from "./messageReducer";
import { usersReducer } from "./usersReducer";


export default combineReducers({
    config: configReducer,
    users: usersReducer,
    messages: messageReducer
});