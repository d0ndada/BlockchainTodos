// import "./TodoCompleted.css";
import {
  List,
  DeleteButton,
  CheckBox,
  TodoCompletedText,
} from "../styles/Todos";

function TodoCompleted({ handleToggleCompleted, todo, id, removeTodo }) {
  return (
    <List key={id}>
      <CheckBox>
        <span
          className="material-symbols-outlined"
          onClick={() => handleToggleCompleted(todo.id)}
        >
          select_check_box
        </span>
      </CheckBox>
      <TodoCompletedText>
        {todo.id} - {todo.text}{" "}
      </TodoCompletedText>
      <DeleteButton onClick={() => removeTodo(todo.id)}>
        <span className="material-symbols-outlined">delete</span>
      </DeleteButton>
    </List>
  );
}

export default TodoCompleted;
