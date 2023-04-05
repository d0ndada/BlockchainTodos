import './App.css';
import { Home } from '../Home/Home';
import { ConnectMetamask } from '../Connect/ConnectMetamask';

function App() {
  return (
    <div className="App">
      <header className='wrapper'>
        <p>Todo</p>
        <ConnectMetamask />
      </header>
      <main className='wrapper'>
        <Home />
      </main>
      <footer className='wrapper'>
        footer
      </footer>
    </div>
  );
}

export default App;
