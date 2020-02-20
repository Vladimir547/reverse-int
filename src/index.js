module.exports = function reverse(n) {
  let result = [];
  let str = `${n}`;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != '-') {
      result.push(str[i]);
    }

  }
  result = result.join('');
  return Number(result);
}
