import logo from './logo.svg';
import './App.css';
import UI from './component/UI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UI></UI>
      </header>
    </div>
  );
}

export default App;
