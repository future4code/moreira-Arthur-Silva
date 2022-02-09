 import { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard/PokeCard';
import axios from 'axios'; 

 const App = (props) => {

  const [pokelist, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");
  
  useEffect(() => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokelist(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  const onChangePokeName = (event) =>{
    setPokeName(event.target.value)
  }
  
  return (
    <div>
      <select onChange={onChangePokeName}>
        <option value={""}>nenhum</option>
        {pokelist.map(pokemon => {
          return <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App; 
