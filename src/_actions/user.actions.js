import * as types from '../_constants'
import { login } from '../_services';
import { push } from 'react-router-redux';
//import { history } from '../_helpers';

var fetchUrl = 'https://swapi.co/api/people/?search=',
    i,
    isFound = false;

export function userActionlogin({ username, password }) {
    return dispatch => {

            login(fetchUrl + username)
            .then(response => {
                return response.json();
            })
            .then(response => {
                if (response.results.length) {
                    for (i=0; i < response.results.length; i++) {
                        if (response.results[i].name === username && response.results[i].birth_year === password) {
                            isFound = true;
                            dispatch(loginSuccess({
                                "username":response.results[0].name,
                                "message": "Login Successful",
                                "failed": false
                            }));
                            dispatch(push("/planetSearch"));
                            break;
                        }
                    }
                }

                if(!isFound) {
                    dispatch(loginFailure({
                        "message": "Incorrect Username/Password",
                        "failed": true
                    }));
                }

            });
    };
}

// function logout() {
//     userService.logout();
//     return { type: userConstants.LOGOUT };
// }

function loginSuccess(data) {
    return {
        type: types.USERS_LOGIN_SUCCESS,
        payload: data
    }
}

function loginFailure(data) {
    return {
        type: types.USERS_LOGIN_FAILURE,
        payload: data
    }
}