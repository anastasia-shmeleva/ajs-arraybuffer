import getBuffer from './getBuffer';
import ArrayBufferConverter from './arrayBufferConverter';

const arrayBufferConverter = new ArrayBufferConverter();

arrayBufferConverter.load(getBuffer());

console.log(arrayBufferConverter.toString());
