import {GET_ERROR,GET_POPULAR,SET_LOADING,GET_SEARCH_RESULT} from '../types'
import axios from 'axios';
import {key} from '../../key';

const apiKeyFormatPopular = (videoType,key) =>{
    //Formated for popular data calls
    return `https://api.themoviedb.org/3/${videoType}/popular?api_key=${key}&language=en-US&page=1`

}

export const getPopulars = () => async dispatch =>{
    try{
    setLoading();
    const movies = await axios.get(apiKeyFormatPopular('movie',key));
    const tv = await axios.get(apiKeyFormatPopular('tv',key));
    const people = await axios.get(apiKeyFormatPopular('person',key));
    const trending = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
   return dispatch({
        type:GET_POPULAR,
        payload:{movies:movies.data.results,tvs:tv.data.results,people:people.data.results,trending:trending.data.results}
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

export const submitSearch = (searchField) => async dispatch =>{
    console.log("Called");
      try{
          setLoading();
          const searchData = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${searchField}&page=1&include_adult=false`)
          console.log(searchData);
          return dispatch({
            type:GET_SEARCH_RESULT,
            payload:searchData.data.results
        })
      }
      catch(err){

        return dispatch({
          type: GET_ERROR,
          payload: err
        });
    }

  }




