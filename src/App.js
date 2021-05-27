import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>"app.js"</code> and save to refresh (and cum).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Button variant="outline-primary">Learn React</Button>{' '}
        </a>
      </header>
    </div>
  );
}

export default App;
