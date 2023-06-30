import './App.css';
import Navbar from './components/NavBar/NavBar.js';
import Head from './components/Head/Head';
import Soportes from './components/Soportes/Soportes';
import titulo from "./components/assets/logos/Titulo-removebg-preview.png"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <Soportes/>
    </div>
  );
}

export default App;
