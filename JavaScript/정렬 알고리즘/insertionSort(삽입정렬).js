// 삽입 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라. 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

console.log(insertionSort([5, 2, 4, 1, 3])); // [ 1, 2, 3, 4, 5 ]
console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(insertionSort([100, 42, -53, 1, 2, -43])); // [ -53, -43, 1, 2, 42, 100 ]