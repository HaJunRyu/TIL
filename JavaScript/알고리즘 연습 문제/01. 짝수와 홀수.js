/*
  evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다.
  num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd 함수를 완성하라.
*/

// if문
function evenOrOdd1(num) {
  if (num < 1) throw new Error('parameter is only positive integer');

  if (num % 2 === 0) return 'Even';

  return 'Odd';
}

console.log(evenOrOdd1(2)); // Even
console.log(evenOrOdd1(3)); // Odd
console.log(evenOrOdd1(1000)); // Even

// 삼항 조건 연산자
function evenOrOdd2(num) {
  if (num < 1) throw new Error('parameter is only positive integer');

  const result = num % 2 === 0 ? 'Even' : 'Odd';
  return result;
}

console.log(evenOrOdd2(2)); // Even
console.log(evenOrOdd2(3)); // Odd
console.log(evenOrOdd2(1000)); // Even
