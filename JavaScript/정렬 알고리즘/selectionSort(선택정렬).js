// 선택 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라. 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

// 처음 코드 (정렬은 되지만 주어진 조건(그림)대로 동작하지 않고 정렬순서가 다름)
function selectionSort1(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 문제에서 주어진 조건(그림)대로 동작하는 코드
function selectionSort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minNumIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minNumIdx]) minNumIdx = j;
    }
    const temp = arr[i];
    arr[i] = arr[minNumIdx];
    arr[minNumIdx] = temp;
  }
  return arr;
}

console.log(selectionSort1([2, 5, 4, 1, 3])); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort1([-7, 4, 25, 12, 1])); // [ -7, 1, 4, 12, 25 ]

console.log(selectionSort2([2, 5, 4, 1, 3])); // [ 1, 2, 3, 4, 5 ]
console.log(selectionSort2([9, 5, 4, 3, 1])); // [ 1, 3, 4, 5, 9 ]
console.log(selectionSort2([-7, 4, 25, 12, 1])); // [ -7, 1, 4, 12, 25 ]