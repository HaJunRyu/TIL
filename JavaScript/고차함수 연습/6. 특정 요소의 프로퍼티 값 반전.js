let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 스프레드 문법을 이용한 기존 객체에 특정 프로퍼티 변경
const toggleCompletedById1 = id => {
  todos = todos.map(todo => {
    if (todo.id === id) return { ...todo, completed: !todo.completed };
    return todo;
  });
}

// Object.assign을 이용한 기존 객체에 특정 프로퍼티 변경
const toggleCompletedById2 = id => {
  todos = todos.map(todo => {
    if (todo.id === id) return Object.assign(todo, { completed: !todo.completed });
    return todo;
  });
}

toggleCompletedById1(2);

console.log(todos);

toggleCompletedById2(2);

console.log(todos);
