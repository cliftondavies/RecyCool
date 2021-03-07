import { combineReducers } from 'redux';
import {
  LOAD_DEFAULT_LOCATION, LOAD_USER_LOCATION, LOAD_ERROR, CHANGE_FILTER,
} from './actions';

export const initialState = {
  posts: [],
  defaultLoading: 'idle',
  geoLoading: 'idle',
  error: null,
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEFAULT_LOCATION:
      return {
        ...state,
        posts: action.payload.posts,
        defaultLoading: 'completed',
        error: null,
      };
    case LOAD_USER_LOCATION:
      return {
        ...state,
        posts: action.payload.posts,
        geoLoading: 'completed',
        error: null,
      };
    case LOAD_ERROR: {
      const { error, from } = action.payload;
      let { defaultLoading, geoLoading } = state;
      if (from === 'london') { defaultLoading = 'failed'; }
      if (from === 'geo') { geoLoading = 'failed'; }
      return {
        ...state,
        defaultLoading,
        geoLoading,
        error,
      };
    }
    default:
      return state;
  }
};

export const postFilter = (state = 'offer', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({ posts, postFilter });
