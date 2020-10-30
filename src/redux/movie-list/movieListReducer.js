import {GET_ERROR,GET_POPULAR_MOVIES} from '../types'
const INITIAL_STATE = {
    movies:[],
    err:null
}

const movieListReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case GET_ERROR:
            console.error(action.payload);
            return {
              ...state,
              err: action.payload,
            };
        case GET_POPULAR_MOVIES:
            return{
                ...state,
                movies:action.payload.data
            }

        default:
            return state;
    }
}


export default  movieListReducer;