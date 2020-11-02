import { GET_ERROR, GET_POPULAR, SET_LOADING } from "../types";
const INITIAL_STATE = {
  popularMovies: [],
  popularTvs: [],
  popularPeople: [],
  trendingDay: [],
  trendingWeek: [],
  isLoading: false,
  err: null,
};

const mediaListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ERROR:
      console.error(action.payload);
      return {
        ...state,
        err: action.payload,
      };
    case GET_POPULAR:
      return {
        ...state,
        popularMovies: action.payload.movies,
        popularTvs: action.payload.tvs,
        popularPeople: action.payload.people,
        trendingDay: action.payload.trendingDay,
        trendingWeek: action.payload.trendingWeek,
        isLoading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default mediaListReducer;
