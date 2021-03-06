import { GET_ERROR, GET_POPULAR } from "../types";
import axios from "axios";
import { key } from "../../key";
import { setLoading } from "../utils/util";

const apiKeyFormatPopular = (videoType, key) => {
  //Formated for popular data calls
  return `https://api.themoviedb.org/3/${videoType}/popular?api_key=${key}&language=en-US&page=1`;
};

export const getPopulars = () => async (dispatch) => {
  try {
    setLoading();
    const movies = await axios.get(apiKeyFormatPopular("movie", key));
    const tv = await axios.get(apiKeyFormatPopular("tv", key));
    const people = await axios.get(apiKeyFormatPopular("person", key));
    const trendingDay = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
    );
    const trendingWeek = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`
    );
    return dispatch({
      type: GET_POPULAR,
      payload: {
        movies: movies.data.results,
        tvs: tv.data.results,
        people: people.data.results,
        trendingDay: trendingDay.data.results,
        trendingWeek: trendingWeek.data.results,
      },
    });
  } catch (err) {
    return dispatch({
      type: GET_ERROR,
      payload: err,
    });
  }
};
