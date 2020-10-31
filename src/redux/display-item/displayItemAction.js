import {GET_ERROR,SET_LOADING,GET_DETAILS} from '../types'
import axios from 'axios';
import {key} from '../../key';

const apiKeyFormatDisplay = (mediaType,id,key) =>{
    //Formated for popular data calls
    return `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${key}&language=en-US
    `

}

export const getDetails = (mediaType,id) => async dispatch =>{
    try{
    setLoading();
    const detail = await axios.get(apiKeyFormatDisplay(mediaType,id,key));
   return dispatch({
        type:GET_DETAILS,
        payload:detail.data
    })
    }
    catch(err){

        return dispatch({
          type: GET_ERROR,
          payload: err
        });
    }
}

export const setLoading = () => {
    return { type: SET_LOADING };
  };