import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${process.env.PUBLIC_URL + "/assets/paper.jpg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
`;
