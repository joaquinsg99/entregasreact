import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar/NavBar';
import { CartWidget } from './components/NavBar/CartWidget/CartWidget';
import { ItemListContainer } from './components/NavBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <Navbar />

      <ItemListContainer greeting ="YsyA" />
      <ItemListContainer greeting ="Duki" />
      <ItemListContainer greeting ="Khea" />
    
    </div>
  );
}

export default App;
