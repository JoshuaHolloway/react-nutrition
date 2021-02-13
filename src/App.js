import logo from './logo.svg';
import './App.css';
import BasicTable from './BasicTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        
        <img src={logo} className="App-logo" alt="logo" />

        <BasicTable></BasicTable>
      </header>
    </div>
  );
}

export default App;