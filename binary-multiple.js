module.exports = function manySmallBuffers() {
  let result = {}
  for (let i = 0; i < 128; i += 1) {
    result['buffer-' + i] = Buffer.from(Array.from({length: 128}, (v, i) => (i % 250) + 1))
  }
  return result
}