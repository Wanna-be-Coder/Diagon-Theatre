import {GET_ERROR,SET_LOADING,GET_DETAILS} from '../types'
const INITIAL_STATE = {
    displayItem:{},
    isLoading:false,
    err:null
}

const displayItemReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case GET_ERROR:
            console.error(action.payload);
            return {
              ...state,
              err: action.payload,
            };

            case GET_DETAILS:
                return{
                    ...state,
                    displayItem:action.payload,
                    isLoading:false
                }
   
            case SET_LOADING:
                return{
                    ...state,
                    isLoading:true
                };


        default:
            return state;
    }
}



export default  displayItemReducer;