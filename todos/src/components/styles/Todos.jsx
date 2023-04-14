import styled from "styled-components";

export const Pointer = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.15);
`;

export const DeleteButton = styled(Pointer)`
  border: 0px;
`;

export const CheckBox = styled(Pointer)``;

export const TodoText = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100% - 160px);
  font-size: 28px;
  font-family: "Indie Flower", cursive;
`;

export const TodoCompletedText = styled.span`
  text-decoration-line: line-through;
  font-size: 28px;
  font-family: "Indie Flower", cursive;
`;
