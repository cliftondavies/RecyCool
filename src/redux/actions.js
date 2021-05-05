export const LOAD_DEFAULT_LOCATION = 'LOAD_DEFAULT_LOCATION';
export const LOAD_USER_LOCATION = 'LOAD_USER_LOCATION';
export const LOAD_ERROR = 'LOAD_ERROR';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const loadDefaultLocation = ({ posts }) => (
  {
    type: LOAD_DEFAULT_LOCATION,
    payload: { posts },
  }
);

export const loadUserLocation = ({ posts }) => (
  {
    type: LOAD_USER_LOCATION,
    payload: { posts },
  }
);

export const loadError = ({ error, from }) => (
  {
    type: LOAD_ERROR,
    payload: { error, from },
  }
);

export const changeFilter = filter => (
  {
    type: CHANGE_FILTER,
    payload: { filter },
  }
);
