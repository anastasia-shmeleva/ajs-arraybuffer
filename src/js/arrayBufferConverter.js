export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const newBuffer = new Uint16Array(this.buffer);
    let string = '';

    for (let i = 0; i < newBuffer.length; i += 1) {
      string += String.fromCharCode(newBuffer[i]);
    }

    return string;
  }
}
