import {combineReducers} from 'redux';
import mediaListReducer from './media-list/mediaListReducer';
import displayItemReducer from './display-item/displayItemReducer';


export default combineReducers({
    media:mediaListReducer,
    details:displayItemReducer
})