import {GET_ERROR,GET_POPULAR} from '../types'
const INITIAL_STATE = {
    popularMovies:[],
    popularTvs:[],
    popuplarPeople:[],
    trending:[],
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
        case GET_POPULAR:
            return{
                ...state,
                popularMovies:action.payload.movies,
                popularTvs:action.payload.tvs,
                popuplarPeople:action.payload.people,
                trending:action.payload.trending

            };


        default:
            return state;
    }
}


export default  movieListReducer;