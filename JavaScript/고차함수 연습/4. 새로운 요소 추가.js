let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos.splice(0, 0, newTodo);
}

function addTodo2(...newTodo) {
  todos = newTodo.concat(todos);
}

addTodo({ id: 4, content: 'Test', completed: false });
console.log(todos);

addTodo2({ id: 5, content: 'React', completed: false });
console.log(todos);
/*
[
  { id: 5, content: 'React', completed: false },
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/
