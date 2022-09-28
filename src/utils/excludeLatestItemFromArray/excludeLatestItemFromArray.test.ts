import { excludeLatestItemFromArray } from './excludeLatestItemFromArray';

describe('utils -> excludeLatestItemFromArray', () => {
  it('should return new array', () => {
    const testArray = ['a', 'b', 'c'];

    expect(excludeLatestItemFromArray(testArray) !== testArray).toBeTruthy();
  });
  it('should return new array without latest item', () => {
    const expectedResult = ['a', 'b'];
    const testArray = ['a', 'b', 'c'];

    expect(excludeLatestItemFromArray(testArray)).toStrictEqual(expectedResult);
  });
  it('does not depent on item type', () => {
    const expectedResult = [1, 2];
    const testArray = [1, 2, 3];

    expect(excludeLatestItemFromArray(testArray)).toStrictEqual(expectedResult);
  });
  it('return empty array if test array has only one item', () => {
    const testArray = [1];

    expect(excludeLatestItemFromArray(testArray)).toStrictEqual([]);
  });
  it('return empty array if test array is empty', () => {
    const testArray: unknown[] = [];

    expect(excludeLatestItemFromArray(testArray)).toStrictEqual([]);
  });
});
