import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('encodes slash as segment data', () => {
  assert.equal(api.encodePathSegment('a/b'), 'a%2Fb');
});
test('encodes spaces', () => {
  assert.equal(api.encodePathSegment('two words'), 'two%20words');
});
test('round trips Unicode', () => {
  assert.equal(api.decodePathSegment(api.encodePathSegment('café/你好')), 'café/你好');
});
test('decodes reserved characters', () => {
  assert.equal(api.decodePathSegment('a%2Fb'), 'a/b');
});
test('preserves unreserved text', () => {
  assert.equal(api.encodePathSegment('abc-_.~'), 'abc-_.~');
});
test('rejects malformed escape', () => {
  assert.throws(() => api.decodePathSegment('%XX'), RangeError);
});
