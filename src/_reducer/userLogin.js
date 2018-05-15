import * as types from '../_constants'

const userLogin = (
    state = {},
    action
) => {
    switch(action.type) {
        case types.USERS_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                username: action.payload.username,
                message: action.payload.message
            });

        case types.USERS_LOGIN_FAILURE:
            console.log(state);
            return Object.assign({}, state, {
                message: action.payload.message,
                failed: action.payload.failed
            });

        default:
        return state;

    }
}

export default userLogin;