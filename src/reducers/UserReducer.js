import * as actionTypes from '../constants';
export default function UserReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_USER:
            return {
                ...state,
                users: action.users
            };
        case actionTypes.SHOW_DETAILS:
            return {
                ...state,
                display: action.display
            };
        default: return state;
    }
}

