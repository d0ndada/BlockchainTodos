import { Metamask } from "../Metamask/Metamask";
import TodoList from "../Todolist/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import { BlockchainContext } from "../../UseContext/blockchainContext";
import { useBlockchain } from "../../useBlockchain/useBlockchain";
import {
  Header,
  Main,
  Footer,
  FooterText,
  GithubLogo,
  Link,
} from "../styles/HomeStyles";

export const Home = () => {
  const blockchain = useBlockchain();

  return (
    <BlockchainContext.Provider value={blockchain}>
      <Header>
        <Metamask />
      </Header>
      <Main>
        <TodoForm />
        <TodoList />
      </Main>
      <Footer>
        <FooterText>&copy; 2023 d0ndada </FooterText>
        <Link
          href="https://github.com/d0ndada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo
            className="GithubLogo"
            alt="github"
            src={process.env.PUBLIC_URL + "/assets/github-mark.png"}
          />
        </Link>
      </Footer>
    </BlockchainContext.Provider>
  );
};
