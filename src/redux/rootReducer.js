import {combineReducers} from 'redux';
import mediaListReducer from './media-list/mediaListReducer';
import displayItemReducer from './display-item/displayItemReducer';
import searchReducer from './searchItems/searchItemReducer';


export default combineReducers({
    media:mediaListReducer,
    details:displayItemReducer,
    searchData:searchReducer
})