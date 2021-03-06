/*
  인수로 전달된 배열의 요소 중에서 중복된 요소를 제외하고 유니크한 요소만을 반환하는 함수를 작성하라.

  for 문은 사용하지 않도록 하자.
*/

function uniq1(array) {
  return [...new Set(array)];
}

function uniq2(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(uniq1([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
console.log(uniq2([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
console.log(uniq2([2, 1, 2, 3, 4, 3, 4, 4, 4, 4, 3, 3, 1, 1, 7, 7, 4, 6])); // [ 2, 1, 3, 4, 7, 6 ]
