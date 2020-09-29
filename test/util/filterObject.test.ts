import { filterObject } from '../../src/util/filterObject';

describe('util/filterObject', () => {

  it('filters out keys with undefined values', () => {
    expect(filterObject({ foo: 'bar', baz: undefined })).toEqual({ foo: 'bar' })
  });

  it('filters out keys with empty array values', () => {
    expect(filterObject({ foo: 'bar', baz: [] })).toEqual({ foo: 'bar' })
  });

});
