import {GET_ERROR,SET_LOADING,GET_SEARCH_RESULT} from '../types'
const INITIAL_STATE = {
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

            case SET_LOADING:
                return{
                    ...state,
                    isLoading:true
                };
            case GET_SEARCH_RESULT:
                return{
                    ...state,
                    searchResults:action.payload,
                    isLoading:false

                };


        default:
            return state;
    }
}


export default  mediaListReducer;