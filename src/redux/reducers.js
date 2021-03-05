import { combineReducers } from 'redux';
import {
  LOAD_DEFAULT_LOCATION, LOAD_USER_LOCATION, LOAD_ERROR, CHANGE_FILTER,
} from './actions';

const initialState = {
  posts: [],
  defaultLocation: 'idle',
  userLocation: 'idle',
  error: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEFAULT_LOCATION:
      return {
        ...state,
        posts: action.payload,
        defaultLocation: 'completed',
        error: null,
      };
    case LOAD_USER_LOCATION:
      return {
        ...state,
        posts: action.payload,
        userLocation: 'completed',
        error: null,
      };
    case LOAD_ERROR: {
      const { error, from } = action.payload;
      let { defaultLocation, userLocation } = state;
      if (from === 'london') { defaultLocation = 'failed'; }
      if (from === 'geo') { userLocation = 'failed'; }
      return {
        ...state,
        defaultLocation,
        userLocation,
        error,
      };
    }
    default:
      return state;
  }
};

const postFilter = (state = 'offer', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({ posts, postFilter });
