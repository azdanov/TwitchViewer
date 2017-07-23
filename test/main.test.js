import 'babel-polyfill';
import { assert } from 'chai';

describe('', () => {
  it('One plus one is equal to two', () => {
    const a = 1;
    assert.equal(2, `${a + 1}`);
  });
});
