import styled from "styled-components";

export const FormWrapper = styled.form`
  padding: 40px 18px;
`;

export const FormContainer = styled.div`
  box-shadow: -2px 8px 19px 16px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  border-radius: 10px;
  background-color: transparent;
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Add todo...",
})`
  background: transparent;

  font: inherit;

  border: 0;
  outline: 0;
  padding: 15px 18px;
  border-radius: 3px;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: lightgrey;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
    border-radius: 13px;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #110f0f;

  box-shadow: inset -8px 7px 14px 3px rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 15px 17px;
  border-radius: 9px;
  outline-style: solid;
  outline-width: 2px;
  outline-color: gray;

  &:hover {
    cursor: pointer;
    box-shadow: inset 1px -2px 14px 10px rgba(41, 35, 35, 0.1);
    outline-style: solid;
    outline-width: 4px;
    outline-color: gray;
  }
  &:active {
    background: white;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
  &:inside {
    margin-left: 10px;
  }
`;

export const SubmitButton = styled(Button).attrs({
  type: "submit",
})``;

export const ArrowSpan = styled.span`
  @keyframes arrow-move {
    0%,
    100% {
      transform: translate(0, 0) rotate(15deg);
    }
    50% {
      transform: translate(10px, -10px) rotate(15deg);
    }
  }
  display: inline-block;
  animation: arrow-move 2s linear infinite;
`;

//SORTBUTTON.JSX

export const SortButton = styled.button.attrs({
  type: "submit",
})`
  background-color: transparent;
  font: inherit;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 15px 17px;
  margin-left: 5px;
  border-radius: 9px;

  outline-style: solid;
  outline-width: 2px;
  outline-color: gray;

  &:hover {
    cursor: pointer;
    box-shadow: inset rgba(0, 0, 0, 0.1) 0px 1px 11px 3px;
    outline-style: solid;
    outline-width: 4px;
    outline-color: gray;
  }

  &:active {
    background: white;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);

    &:inside {
      margin-left: 10px;
    }
  }
`;
