import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./components/PhotoViewer/PhotoViewer"

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Photo Viewer</h1>
        <PhotoViewer src = {"https://picsum.photos/id/600/1600/900.jpg"}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
