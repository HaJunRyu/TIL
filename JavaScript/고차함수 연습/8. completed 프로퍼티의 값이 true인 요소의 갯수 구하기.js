const todos = [
  { id: 7, content: 'Node', completed: false },
  { id: 6, content: 'HTML', completed: true },
  { id: 5, content: 'CSS', completed: true },
  { id: 4, content: 'Javascript', completed: false },
  { id: 3, content: 'React', completed: false },
  { id: 2, content: 'Java', completed: true },
  { id: 1, content: 'Spring', completed: true }
];

function countCompletedTodos() {
  return todos.reduce((acc, { completed }) => completed ? ++acc : acc, 0);
}

console.log(countCompletedTodos()); // 1