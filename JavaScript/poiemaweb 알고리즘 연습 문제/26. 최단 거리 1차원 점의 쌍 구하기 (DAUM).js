/*
  1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라.
(단 점들의 배열은 모두 정렬되어있다고 가정한다.)

  예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.
*/

function findMinDistance(array) {
  const arr = [];

  for (let i = 0; i < array.length - 1; i++) arr.push([array[i], array[i + 1]]);

  const min = Math.min(...arr.map((v, i, arr) => arr[i][1] - v[0]));
  const result = arr.filter((v, i, arr) => (arr[i][1] - v[0] === min));

  return result.length === 1 ? result.flat() : result;
}

// 1차원 점의 배열
console.log(findMinDistance([1, 3, 4, 8, 13, 17, 20, 23, 24])); // [[3, 4], [23, 24]]
console.log(findMinDistance([1, 5, 12, 24, 29, 36, 44, 56, 100])); // [ 1, 5 ]
console.log(findMinDistance([1, 1, 12, 24, 29, 36, 44, 56, 100])); // [ 1, 1 ]
console.log(findMinDistance([1, 2, 5, 7, 9, 10, 13, 15, 16])); // [ [ 1, 2 ], [ 9, 10 ], [ 15, 16 ] ]
