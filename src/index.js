module.exports = function reverse (n) {
  let array = String(Math.abs(n)).split('');
  const out = array.reverse().join('');
  return out
}
