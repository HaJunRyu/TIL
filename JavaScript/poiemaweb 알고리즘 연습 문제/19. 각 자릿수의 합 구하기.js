/*
  정수 n이 주어지면, n의 각 자릿수의 합을 구해서 반환하는 digitSum 함수를 완성하라.

  예를 들어 n = 123이면 1 + 2 + 3 = 6을 반환한다.
  단, n은 100,000,000 이하의 정수로 한다.
*/

function digitSum(n) {
  if (n > 100000000) return false;

  n += '';
  let result = 0;

  for (let i = 0; i < n.length; i++) result += +n[i];

  return result;
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(1024)); // 7
console.log(digitSum(984242)); // 29
console.log(digitSum(100000001)); // false
