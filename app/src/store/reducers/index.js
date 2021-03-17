import {FETCH_CHARACTER_FAILURE,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_START} from '../index';

const initialState = {
    name: [],
    image: [''],
    status: ['Wanted, Dead or Alive'],
    isLoading: false,
    
}

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CHARACTER_SUCCESS:
            console.log( action.payload, state.name, 'actionpayload & statename')
            return {
                ...state,
                isLoading: false,
                name: action.payload,
                //status: action.payload,
                //image: action.payload, 

            }
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }

}