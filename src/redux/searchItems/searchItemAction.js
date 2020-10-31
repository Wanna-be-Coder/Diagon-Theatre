import {GET_ERROR,GET_SEARCH_RESULT} from '../types'
import axios from 'axios';
import {key} from '../../key';
import {setLoading} from '../utils/util';



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
