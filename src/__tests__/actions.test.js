import {
  loadDefaultLocation, loadUserLocation, loadError, changeFilter,
} from '../redux/actions';
import { response, data } from '../test/test-data';

describe('Actions', () => {
  test('Load default location action', () => {
    const posts = response();
    const test = loadDefaultLocation(posts);
    const expected = data(posts);
    expect(test.payload.posts).toEqual(expect.arrayContaining(expected));
  });

  test('Load user location action', () => {
    const posts = response();
    const test = loadUserLocation(posts);
    const expected = data(posts);
    expect(test.payload.posts).toEqual(expect.arrayContaining(expected));
  });

  test('Load error action', () => {
    const error = { error: 'Invalid params', from: 'geo' };
    const test = loadError(error);
    expect(test.payload).toEqual(error);
  });

  test('Change filter action', () => {
    const filter = 'offer';
    const test = changeFilter(filter);
    expect(test.payload.filter).toMatch(/offer/);
  });
});
