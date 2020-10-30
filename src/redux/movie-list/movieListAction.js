import {GET_ERROR,GET_POPULAR_MOVIES} from '../types'
import axios from 'axios';
import {key} from '../../key';

const apiKeyFormat = (videoType,key) =>{

    return `https://api.themoviedb.org/3/${videoType}/popular?api_key=${key}&language=en-US&page=1`

}

export const getMovies = () => async (dispatch) =>{
    try{
    const res = await axios.get(apiKeyFormat('movie',key));
   return dispatch({
        type:GET_POPULAR_MOVIES,
        payload:{data:res.data.results}
    })
    }
    catch(err){
        console.log(err);
        return dispatch({
          type: GET_ERROR,
          payload: err
        });
    }
}