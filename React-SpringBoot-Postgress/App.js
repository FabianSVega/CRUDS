import './App.css';
import ButtonAppBar from './components/appbar';
import Login from './components/login';
import Menu from './components/menu';
function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Login/>
      <ButtonAppBar/>
      <Menu/>
      This is my app
    </div>
  );
}

export default App;
