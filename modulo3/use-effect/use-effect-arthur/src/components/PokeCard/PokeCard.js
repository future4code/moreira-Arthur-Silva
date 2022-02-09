import axios from "axios";
import React, { useEffect, useState } from "react";

const PokeCard = (props) => {
  
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        pegaPokemon(props.pokemon)
    
    }, [props.pokemon])

  
  const pegaPokemon = pokeName => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => {
      setPokemon(response.data)
    })
    .catch(err => {
        console.log("deu erro arthur!")
    })
}  

    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight}</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            )}
        </div>
    )
  
}

export default PokeCard;
 