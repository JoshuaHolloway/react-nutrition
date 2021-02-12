import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import BasicTable from './BasicTable';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="oulined" color="primary">Hello</Button>
        <img src={logo} className="App-logo" alt="logo" />

        <BasicTable></BasicTable>
      </header>
    </div>
  );
}

export default App;
