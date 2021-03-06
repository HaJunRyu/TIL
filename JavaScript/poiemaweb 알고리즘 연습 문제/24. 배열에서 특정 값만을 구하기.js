/*
  인수로 주어진 배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라
*/

function getArray(arr) {
  return arr.filter(v => v % 2 === 0 && v > 3);
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
console.log(getArray([1, 2, 3, 4, 5, 6, 101, 102, 200, 202, 104231])); // [ 4, 6, 102, 200, 202 ]
