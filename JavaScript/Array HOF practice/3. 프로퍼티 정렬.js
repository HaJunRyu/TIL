/* 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면
todos의 요소를 정렬하는 함수를 작성하라.

단, todos는 변경되지 않도록 하자. */

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  const copy = [...todos];
  copy.sort((x, y) => (x[key] > y[key] ? 1 : -1));
  return copy;
}

console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/

const num = 10;
console.log(num.toString(16));
// U+0061 > U+0062 와 같은 식
console.log('a' > 'b');
// a의 유니코드 포인트는 U+0061, B의 유니코드 포인트는 U+0042
// 그러므로 a의 유니코드 포인트가 더 크기때문에 true
console.log('a' > 'B');
