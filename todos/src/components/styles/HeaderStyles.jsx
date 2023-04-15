import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const HeaderTitle = styled.h2`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-shadow: 0px 1px 10px gray;
`;

export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  right: -2%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 4%;
  box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.1);
`;

export const FullAddress = styled.span`
  padding: 2px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const ShortAddress = styled.span`
  margin-right: 5px;
  font-size: 40px;
  cursor: pointer;
`;

export const MetamaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: slategray;
  padding: 8px 15px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 10px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #e6741b;
    box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
  }
`;

export const MetamaskContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 4%;
`;
