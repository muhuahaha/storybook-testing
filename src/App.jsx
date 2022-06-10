import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonWeb from './components/ButtonWeb/ButtonWeb';
// import { Danger } from './components/ChakraButton/ChakraButton.stories';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <ButtonWeb
            size="lg"
            label="Hallo asdYo"
            color="white"
            backgroundColor="red"
          />
        </p>
        <p>
          <ButtonWeb
            label="Hallo Yo Green"
            color="white"
            size="lg"
            backgroundColor="green"
          />
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
