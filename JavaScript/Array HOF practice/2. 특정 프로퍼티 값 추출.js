/* 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중,
해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.

단, for 문이나 forEach는 사용하지 않을것. */

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues(key) {
  return todos.map(item => item[key]);
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]

// map메서드는 호출한 배열의 값을 변경시키지 않는다.
console.log(todos); // 선언한 그대로
