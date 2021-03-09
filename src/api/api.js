import { loadDefaultLocation, loadUserLocation, loadError } from '../redux/actions';

const apiKey = process.env.REACT_APP_API_KEY;

const getPostsByCoords = async (latitude, longitude) => {
  try {
    const apiUrl = `https://trashnothing.com/api/v1.2/posts?types=offer%2Cwanted&sources=trashnothing&per_page=50&latitude=${latitude}&longitude=${longitude}&radius=50000&api_key=${apiKey}`;
    const postsJson = await fetch(apiUrl);
    const postsData = await postsJson.json();
    return postsData;
  } catch (error) {
    return error;
  }
};

export const getLondonPosts = async (dispatch, getState) => {
  try {
    const londonPosts = await getPostsByCoords('51.509865', '-0.118092');
    if (getState().posts.defaultLoading === 'idle') { dispatch(loadDefaultLocation(londonPosts)); }
  } catch (error) {
    dispatch(loadError({ error: error.message, from: 'london' }));
  }
};

const getGeolocationPosts = (dispatch, getState) => async position => {
  try {
    const { latitude, longitude } = position.coords;
    const geolocationPosts = await getPostsByCoords(latitude, longitude);
    if (getState().posts.geoLoading === 'idle') { dispatch(loadUserLocation(geolocationPosts)); }
  } catch (error) {
    dispatch(loadError({ error: error.message, from: 'geo' }));
  }
};

export const getUserCoords = (dispatch, getState) => {
  if ('geolocation' in navigator) { navigator.geolocation.getCurrentPosition(getGeolocationPosts(dispatch, getState)); }
};
