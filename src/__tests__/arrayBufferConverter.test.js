/* eslint-disable no-undef */
import ArrayBufferConverter from '../js/arrayBufferConverter';
import getBuffer from '../js/getBuffer';

test('ArrayBufferConverter', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());

  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
