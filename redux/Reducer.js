import {FETCH_USER_FAILURE,FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from './DataAction'


const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const Reducer = (state = initialState, action) => {
    if(state.data != null){
        console.log("data is already present")
    }
    else{
        switch (action.type) {
            case FETCH_USER_REQUEST: return {
                ...state,
                loading: true
            }
            case FETCH_USER_SUCCESS: return {
                loading: false,
                users: action.payload,
                error: ''
            }
            case FETCH_USER_FAILURE: return {
                loading: false,
                users: [],
                error: action.payload,
            }
            default: return state
        }
    }
}