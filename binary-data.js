module.exports = function oneLargeBuffer() {
  return {
    largeBuffer: Buffer.from(Array.from({length: 16384}, (v, i) => (i % 250) + 1)),
  }
}