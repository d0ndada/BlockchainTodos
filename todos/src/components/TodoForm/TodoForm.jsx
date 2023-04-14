import { useState } from "react";
import { NewTodo } from "../../models/todo";
import { useContext } from "react";
import { BlockchainContext } from "../../UseContext/blockchainContext";
import SortOrder from "../SortButton/SortOrder";
import {
  FormWrapper,
  FormContainer,
  Input,
  SubmitButton,
  ArrowSpan,
} from "../styles/FormStyled";

function TodoForm() {
  const { account, createTodo, connected, setTodos } =
    useContext(BlockchainContext);
  const [newTodo, setNewTodo] = useState(new NewTodo(""));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.text.trim().length > 0) {
      e.preventDefault();
      createTodo(newTodo);
      setNewTodo(new NewTodo(""));
    }
  };
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, text: e.target.value });
  };
  const SortByAlphabeticOrder = () => {
    setTodos((prevTodo) =>
      [...prevTodo].sort((a, b) => a.text.localeCompare(b.text))
    );
  };

  const SortById = () => {
    setTodos((prevTodo) =>
      [...prevTodo].sort((a, b) => parseInt(a.id) - parseInt(b.id))
    );
  };

  return (
    <FormWrapper>
      {account && connected ? (
        <FormContainer>
          <Input value={newTodo.text} onChange={handleChange} />
          <SubmitButton onClick={handleSubmit}>
            <span className="material-symbols-outlined">list_alt_add</span>
          </SubmitButton>
          <SortOrder SortByAZ={SortByAlphabeticOrder} SortById={SortById} />
        </FormContainer>
      ) : (
        <h4>
          To interact with this website please connect your metamask wallet in
          the top right corner
          <ArrowSpan className="material-symbols-outlined">
            north_east
          </ArrowSpan>
        </h4>
      )}
    </FormWrapper>
  );
}
export default TodoForm;
