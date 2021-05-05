import { initialState, posts, postFilter } from '../redux/reducers';
import {
  loadDefaultLocation, loadUserLocation, loadError, changeFilter,
} from '../redux/actions';
import { response, data, fakeAction } from '../test/test-data';

describe('Reducers', () => {
  describe('Posts reducer', () => {
    test('when action equals load default location', () => {
      const res = response();
      const post = data(res);
      const action = loadDefaultLocation(res);
      const test = posts(initialState, action);
      const expected = {
        posts: post,
        defaultLoading: 'completed',
        geoLoading: 'idle',
        error: null,
      };
      expect(test).toEqual(expected);
    });

    test('when action equals load user location', () => {
      const res = response();
      const post = data(res);
      const action = loadUserLocation(res);
      const test = posts(initialState, action);
      const expected = {
        posts: post,
        defaultLoading: 'idle',
        geoLoading: 'completed',
        error: null,
      };
      expect(test).toEqual(expected);
    });

    test('when action equals initial load error', () => {
      const error = { error: 'Invalid params', from: 'london' };
      const action = loadError(error);
      const test = posts(initialState, action);
      const expected = {
        posts: [],
        defaultLoading: 'failed',
        geoLoading: 'idle',
        error: error.error,
      };
      expect(test).toEqual(expected);
    });

    test('when action equals update load error', () => {
      const error = { error: 'Invalid params', from: 'geo' };
      const action = loadError(error);
      const test = posts(initialState, action);
      const expected = {
        posts: [],
        defaultLoading: 'idle',
        geoLoading: 'failed',
        error: error.error,
      };
      expect(test).toEqual(expected);
    });

    test('when action is unrecognised', () => {
      const action = fakeAction();
      const test = posts(initialState, action);
      const expected = {
        posts: [],
        defaultLoading: 'idle',
        geoLoading: 'idle',
        error: null,
      };
      expect(test).toEqual(expected);
    });
  });

  describe('Post filter reducer', () => {
    test('when action equals change filter', () => {
      const filter = 'offer';
      const action = changeFilter(filter);
      const test = postFilter('wanted', action);
      expect(test).toMatch(/offer/);
    });

    test('when action is unrecognised', () => {
      const action = fakeAction();
      const test = postFilter('wanted', action);
      expect(test).toMatch(/wanted/);
    });
  });
});
