import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, isLoggedIn } from './_store';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './container/login';
import searchPage from './container/searchPage';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const initialState = null;

const history = syncHistoryWithStore(browserHistory, store);

const requireAuth = (nextState, replace) => {
    if (!isLoggedIn()) {
        replace('/login')
    }
}

ReactDOM.render(
    <Provider store={store}> 
        <Router history={history}>
            <Route path="/" component={Login}/>
            <Route path="login" component={Login}/>
            <Route path="planetSearch" component={searchPage} onEnter={requireAuth}/>
            <Route path="*" onEnter={requireAuth}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);