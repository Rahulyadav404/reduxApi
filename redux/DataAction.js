import axios from 'axios'

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = users => {
    console.log('aryan' ,{users})
    return {
        
        type: FETCH_USER_SUCCESS,
        payload: users,
    }
}

export const fetchUserError = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://api.unsplash.com/photos/?per_page=2&client_id=-QyQ414jzfzBttOvKIDJBNleloBcrjzpSR2dR2fr0r8')
            .then(response => { 
                
                console.log(response.data) 
            })
            
            .catch(error => { dispatch(fetchUserError(error.message)) })
    }
}