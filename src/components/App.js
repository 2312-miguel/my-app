import logo from '../logo.svg';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hola mundo desde reactJS
        </p>
        <a
          className="App-link"  
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende ReactJS
        </a>
      </header>
    </div>
  );
}

export default App;
