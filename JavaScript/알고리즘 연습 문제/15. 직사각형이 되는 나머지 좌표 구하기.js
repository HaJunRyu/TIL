/*
  임의의 좌표 3개가 주어질 때 직사각형이 되는 나머지 1개의 좌표를 구하라.
  예를 들어, [[1, 4], [3, 4], [3, 10]]가 주어지면 [1, 10]을 구한다.

  for 문은 사용하지 않도록 하자.
*/

function getRestCoordinate(array) {
  const flatArr = array.flat();
  const overlap = flatArr.filter((v, i, arr) => arr.indexOf(v) !== i);
  let result = flatArr.filter(v => v !== overlap[0] && v !== overlap[1]);
  return result;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[100, 200], [800, 200], [100, 1000]])); // [800, 1000]
console.log(getRestCoordinate([[6, 2], [4, 1], [6, 1]])); // [2, 4] => bug
