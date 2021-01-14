/*
  n개의 정수를 가진 배열이 있다. 이 배열은 양의 정수와 음의 정수를 모두 가지고 있다. 이 배열을 좀 특별한 방법으로 정렬해야 한다.

  음의 정수는 앞쪽에 내림차순으로, 양의 정수는 뒷쪽에 있어야 한다. 단, 인수로 주어진 원본 배열은 변경되지 않아야 한다.

  예를 들어, [-1, 1, 3, -2, 2, 0]이 주어졌을 때, [-1, -2, 0, 1, 2, 3]를 반환한다.
*/

function specialSort(array) {
  const positive = array.filter(v => v >= 0);
  const negative = array.filter(v => v < 0);

  positive.sort((num1, num2) => num1 - num2);
  negative.sort((num1, num2) => num2 - num1);

  console.log(array); // 인수로 주어진 원본 배열은 변경되지 않는다.

  return [...negative, ...positive];
}

console.log(specialSort([-1, 1, 3, -2, 2, 0])); // [ -1, -2, 0, 1, 2, 3 ]
console.log(specialSort([-45, -31, 34, -21, 53, -41, 0])); // [ -21, -31, -41, -45, 0, 34, 53 ]
console.log(specialSort([1, 2, 3, 4, 5, -124, 0])); // [ -124, 0, 1, 2, 3, 4, 5 ]
