import { List, DeleteButton, CheckBox, TodoText } from "../styles/Todos";

function TodoItem({ handleToggleCompleted, todo, removeTodo }) {
  const isChecked = todo.completed;

  return (
    <List key={todo.id}>
      <CheckBox>
        <span
          className="material-symbols-outlined"
          onClick={() => handleToggleCompleted(todo.id)}
        >
          {isChecked ? "check_box" : "check_box_outline_blank"}
        </span>
      </CheckBox>
      <TodoText>
        {todo.id} - {todo.text}
      </TodoText>
      <DeleteButton onClick={() => removeTodo(todo.id)}>
        <span className="material-symbols-outlined">delete</span>
      </DeleteButton>
    </List>
  );
}

export default TodoItem;
