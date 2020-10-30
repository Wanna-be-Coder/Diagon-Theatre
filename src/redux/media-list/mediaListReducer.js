import {GET_ERROR,GET_POPULAR,SET_LOADING,GET_SEARCH_RESULT} from '../types'
const INITIAL_STATE = {
    popularMovies:[],
    popularTvs:[],
    popularPeople:[],
    trending:[],
    isLoading:false,
    searchResults:[],
    err:null
}

const mediaListReducer = (state=INITIAL_STATE,action) => {
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
                };
            case GET_SEARCH_RESULT:
                return{
                    ...state,
                    searchResults:action.payload

                };


        default:
            return state;
    }
}


export default  mediaListReducer;