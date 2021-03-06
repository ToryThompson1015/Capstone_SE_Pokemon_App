import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {useState} from "react";


function App() {
const [pokemonName, setPokemonName] = useState("")

  return (
    <div className="App">
     <HeaderComponent/>
    </div>
  );
}


export default App;
