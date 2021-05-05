import filterByCategory from '../redux/filters';
import { initialState, loadedState } from '../test/test-data';

describe('Filters', () => {
  test('when in initial state', () => {
    const test = filterByCategory(initialState, 'offer');
    expect(test).toEqual([]);
  });

  test('when in loaded state', () => {
    const test = filterByCategory(loadedState, 'offer');
    expect(test).toHaveLength(1);
  });
});
