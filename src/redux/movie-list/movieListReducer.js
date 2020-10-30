import {GET_ERROR,GET_POPULAR,SET_LOADING} from '../types'
const INITIAL_STATE = {
    popularMovies:[],
    popularTvs:[],
    popularPeople:[],
    trending:[],
    isLoading:false,
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
                popularPeople:action.payload.people,
                trending:action.payload.trending,
                isLoading:false

            };

            case SET_LOADING:
                return{
                    ...state,
                    isLoading:true
                }


        default:
            return state;
    }
}


export default  movieListReducer;