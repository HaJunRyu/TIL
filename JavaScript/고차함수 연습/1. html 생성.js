const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  // 콜백함수의 첫번째 인수는 배열의 요소(현재 객체가 넘어오는중)
  todos.forEach(todo => {
    const checked = todo.completed ? ' checked' : '';
    html += `    <li id=${todo.id}>
      <label><input type="checkbox"${checked}>${todo.content}</label>
    </li>\n`;
  });

  return html;
}

console.log(render());
