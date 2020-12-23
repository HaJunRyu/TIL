let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 스프레드 문법을 이용한 기존 객체에 특정 프로퍼티 변경
function toggleCompletedAll() {
  todos = todos.map(todo =>  ({...todo, completed: true }));
}

// Object.assign을 이용한 기존 객체에 특정 프로퍼티 변경
function toggleDeCompletedAll() {
  todos = todos.map(todo =>  Object.assign(todo, { completed: false }));
}

toggleCompletedAll();

console.log(todos);

toggleDeCompletedAll();

console.log(todos);
