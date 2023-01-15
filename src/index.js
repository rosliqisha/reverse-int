module.exports = function reverse (n) {
  const numberString = n.toString().split('').reverse().join('');
  return parseInt(numberString);
}