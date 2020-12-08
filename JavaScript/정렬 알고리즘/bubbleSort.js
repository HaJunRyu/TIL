// for문 1개로 구현한 코드(로직상 퍼포먼스 떨어짐)
function bubbleSort1(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      const changeNum = array[i + 1];
      array[i + 1] = array[i];
      array[i] = changeNum;
      i = -1;
    }
  }
  return array;
}

// for문 2개로 구현한 코드(벤치마킹상 퍼포먼스 괜찮음)
function bubbleSort2(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const changeNum = array[j + 1];
        array[j + 1] = array[j];
        array[j] = changeNum;
      }
    }
  }
  return array;
}

// 벤치마킹을 위한 length 10000짜리 배열 생성
const array = [];

for (let i = 10000; i > 0; i--) {
  array.push(i);
}

// 결과 확인
console.log(bubbleSort1([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(bubbleSort1([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort1([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]

console.log(bubbleSort1(array)); // 벤치마킹 결과 말도 안되게 느림 배열 length 500개 이상시 아래 함수호출의 100분 1 수준
console.log(bubbleSort2(array)); // 지금으로썬 최선의 코드라고 생각

// // for문 1개 사용해서 퍼포먼스도 나오는 코드 고민중
// function bubbleSort1(array) {
//   let length = array.length - 1;
//   for (let i = 0; i < length - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       const changeNum = array[i + 1];
//       array[i + 1] = array[i];
//       array[i] = changeNum;
//       i = -1;
//     }
//     length--;
//   }
//   return array;
// }

