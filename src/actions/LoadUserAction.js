import * as actionTypes from '../constants';

export const LoadUserAction=()=>{
    return{
        type:actionTypes.LOAD_USER_INITIAL
    }
}

export const ShowDetailsAction=payload=>{
    return{
        type:actionTypes.SHOW_DETAILS_INITIAL,
        payload
    }
}