const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 添加待办
function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="text">${text}</span>
    <button class="del-btn">删除</button>
  `;

  // 点击文字标记完成
  li.querySelector('.text').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // 删除
  li.querySelector('.del-btn').addEventListener('click', () => {
    li.remove();
  });

  todoList.appendChild(li);
  todoInput.value = '';
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});
