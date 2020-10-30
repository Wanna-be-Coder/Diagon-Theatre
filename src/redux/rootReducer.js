import {combineReducers} from 'redux';
import mediaListReducer from './media-list/mediaListReducer';


export default combineReducers({
    media:mediaListReducer
})