import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducers';

export default combineReducers({
  posts: postsReducer,
  users: userReducer
});
