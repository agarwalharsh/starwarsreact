import { combineReducers } from 'redux';
import userLogin from './userLogin';
import planetSearch from './planetSearch';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
    userLogin,
    planetSearch,
    routing: routerReducer
});

export default rootReducer;