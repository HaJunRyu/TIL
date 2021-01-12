/*
  배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 정수의 배열을 반환하는 함수를 완성하라.

  예를 들어 인수가 [10, 15]인 경우, [ 10, 11, 12, 13, 14, 15 ]를 반환한다.
*/

function generateRange1(from, to) {
  const res = [];
  for (let i = from; i <= to; i++) res.push(i);
  return res;
}

function generateRange2(from, to) {
  const res = Array.from({length: to - from + 1}).fill(0);
  return res.map((_, i) => i + from);
}

console.log(generateRange1(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
console.log(generateRange2(1, 3)); // [ 1, 2, 3 ]
console.log(generateRange1(49, 54)); // [ 49, 50, 51, 52, 53, 54 ]
console.log(generateRange2(105, 111)); // [ 105, 106, 107, 108, 109, 110, 111 ]