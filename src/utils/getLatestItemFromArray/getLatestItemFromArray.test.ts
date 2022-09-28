import { getLatestItemFromArray } from './getLatestItemFromArray';

describe('utils -> getLatestItemFromArray', () => {
  it('should return latest item from test array', () => {
    const testArray = ['a', 'b', 'c'];

    expect(getLatestItemFromArray(testArray)).toStrictEqual('c');
  });
  it('should not depend on array type', () => {
    const testArray = [{ a: 1 }, { b: 2 }];

    expect(getLatestItemFromArray(testArray)).toStrictEqual({ b: 2});
  });
  it('should return undefined if test array is empty', () => {
    const testArray: unknown[] = [];

    expect(getLatestItemFromArray(testArray)).toStrictEqual(undefined);
  });
});
