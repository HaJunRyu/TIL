// 인수로 주어진 배열의 평균을 구하는 함수를 완성하라.

const average = array => array.reduce((cur, v) => cur + v, 0) / array.length;

console.log(average([5, 3, 4])); // 4
console.log(average([9, 12, 3])); // 8
console.log(average([4, 5, 12])); // 7
