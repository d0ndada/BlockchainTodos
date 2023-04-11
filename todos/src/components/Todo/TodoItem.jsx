import "./TodoItem.css";

function TodoItem({ handleToggleCompleted, todo, removeTodo }) {
  const isChecked = todo.completed;

  return (
    <li key={todo.id} className="list-holder">
      <div className="pointer">
        <span
          className="material-symbols-outlined"
          onClick={() => handleToggleCompleted(todo.id)}
        >
          {isChecked ? "check_box" : "check_box_outline_blank"}
        </span>
      </div>
      <span className="todo-text">
        {todo.id} - {todo.text}
      </span>
      <button className="pointer" onClick={() => removeTodo(todo.id)}>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </li>
  );
}

export default TodoItem;
