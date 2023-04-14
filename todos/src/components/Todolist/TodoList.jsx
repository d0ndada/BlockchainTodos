import TodoItem from "../Todo/TodoItem";
import TodoCompleted from "../TodoCompleted/TodoCompleted";
import { useContext } from "react";
import { BlockchainContext } from "../../UseContext/blockchainContext";
import {
  HolderWrapper,
  ListTitle,
  TodoContainer,
  CompletedContainer,
  NotVisibleContainer,
} from "../styles/TodoList";

function TodoList() {
  const { account, connected, todos, removeTodo, handleToggleCompleted } =
    useContext(BlockchainContext);

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
    fontSize: "17rem",
  };

  return (
    <>
      {!account && !connected ? (
        <NotVisibleContainer>
          <span style={noVisibleStyle} className="material-symbols-outlined">
            visibility_off
          </span>
        </NotVisibleContainer>
      ) : (
        <HolderWrapper>
          <TodoContainer>
            {account && connected ? <ListTitle>TO-DO:</ListTitle> : null}
            <ul className="ul">{account && connected ? showTodo : null}</ul>
          </TodoContainer>

          <CompletedContainer>
            {account && connected ? <ListTitle>Completed:</ListTitle> : null}
            <ul>{account && connected ? doneTodos : null}</ul>
          </CompletedContainer>
        </HolderWrapper>
      )}
    </>
  );
}
export default TodoList;
