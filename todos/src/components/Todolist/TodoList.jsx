import TodoItem from "../Todo/TodoItem";
import TodoCompleted from "../TodoCompleted/TodoCompleted";
import "./TodoList.css";
import { useContext } from "react";
import { BlockchainContext } from "../../UseContext/blockchainContext";

function TodoList() {
  const {
    account,
    contract,
    setTodos,
    connected,
    todos,
    removeTodo,
    handleToggleCompleted,
  } = useContext(BlockchainContext);

  const showTodo = todos
    .filter((todo) => !todo.completed)
    .map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          handleToggleCompleted={handleToggleCompleted}
          todo={todo}
          id={todo.id}
        />
      );
    });

  const doneTodos = todos
    .filter((todo) => todo.completed)
    .map((todo) => {
      return (
        <TodoCompleted
          key={todo.id}
          removeTodo={removeTodo}
          handleToggleCompleted={handleToggleCompleted}
          todo={todo}
          id={todo.id}
        />
      );
    });

  const noVisibleStyle = {
    fontSize: "16rem",
  };

  return (
    <>
      {!account && !connected ? (
        <div className="not-visible">
          <span style={noVisibleStyle} className="material-symbols-outlined">
            visibility_off
          </span>
        </div>
      ) : (
        <div className="Holder">
          <div className="todo-box">
            {account && connected ? <h3>TO-DO:</h3> : null}
            <ul className="ul">{account && connected ? showTodo : null}</ul>
          </div>

          <div className="completed-box">
            {account && connected ? <h3>Completed:</h3> : null}
            <ul>{account && connected ? doneTodos : null}</ul>
          </div>
        </div>
      )}
    </>
  );
}
export default TodoList;
