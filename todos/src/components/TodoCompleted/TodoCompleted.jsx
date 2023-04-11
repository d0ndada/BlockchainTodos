import "./TodoCompleted.css";

function TodoCompleted({ handleToggleCompleted, todo, id, removeTodo }) {
  return (
    <li key={id} className="list-holder">
      <div className="pointer">
        <span
          className="material-symbols-outlined"
          onClick={() => handleToggleCompleted(todo.id)}
        >
          select_check_box
        </span>
      </div>
      <span className="completed-text">
        {todo.id} - {todo.text}{" "}
      </span>
      <button className="pointer" onClick={() => removeTodo(todo.id)}>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </li>
  );
}

export default TodoCompleted;
