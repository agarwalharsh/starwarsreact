import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../_reducer';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const middleware = [thunk, routerMiddleware(browserHistory)];

export const store = createStore(rootReducer, applyMiddleware(...middleware))

window.store = store;

export const isLoggedIn = () => {
    //console.log(store.getState().userLogin.username);
    if (store.getState().userLogin.username) {
        return true;
    } else {
        return false;
    }
    //return store.getState().userLogin.username;
//    console.log(store.getState());
}

