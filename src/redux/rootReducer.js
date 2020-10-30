import {combineReducers} from 'redux';
import movieListReducer from './movie-list/movieListReducer';


export default combineReducers({
    movie:movieListReducer
})