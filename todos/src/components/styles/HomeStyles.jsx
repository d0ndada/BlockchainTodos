import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled(FlexWrapper).attrs({ as: "header" })`
  height: 14vh;
  font-size: 2rem;
`;

export const Main = styled.main`
  min-height: 70vh;
`;

export const Footer = styled(FlexWrapper).attrs({ as: "footer" })`
  height: 15vh;
`;

export const GithubLogo = styled.img`
  height: 47px;
`;

export const Link = styled.a`
  margin-left: 1%;
`;

export const FooterText = styled.p`
  margin: 0;
`;
