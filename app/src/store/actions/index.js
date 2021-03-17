import axios from 'axios';
import { bindActionCreators } from 'redux';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START'
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE'

export const fetchData = () => { 
    return (dispatch) => {
        dispatch({ type: FETCH_CHARACTER_START });

        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            console.log(res.data.results, 'res')
            dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results})
        })

        //res.data.results results is an array
        .catch(err => {
            // console.log(err, 'err')
            dispatch({ type: FETCH_CHARACTER_FAILURE})
        })
    }
}