import styled from "styled-components";

export const HolderWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  box-shadow: 11px 3px 14px 14px rgba(0, 0, 0, 0.15);
  background-color: transparent;
  border-radius: 28px;
  max-height: 360px;
`;

export const ListTitle = styled.h3`
  position: sticky;
  top: -10px;
  font-family: "Permanent Marker", cursive;
  text-decoration-line: underline;
  font-size: 26px;
`;

export const TodoContainer = styled.div`
  padding: 10px;
  width: 480px;
  overflow-y: auto;
`;

export const CompletedContainer = styled(TodoContainer)``;

export const NotVisibleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
