import * as types from '../_constants'

const planetSearch = (
    state = {
        items: [],
        message: '',
        searchStr: ''
    },
    action
) => {
    switch(action.type) {
        case types.PLANET_FOUND:
            console.log(state.items);
            return Object.assign({}, state, {
                items: action.payload.items,
                searchStr: action.payload.searchStr
            });

        case types.PLANET_NOT_FOUND:
            return Object.assign({}, state, {
                items: action.payload.items,
                message: action.payload.message
            });

        default:
            return state;
    }
}

export default planetSearch;