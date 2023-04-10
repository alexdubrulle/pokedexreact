import { useState } from 'react'
import './App.css'
import './components/PokemonCard'
import PokemonCard from './components/PokemonCard'


function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


  const [pokemonIndex, setPokemonIndex] = useState(0);

  const clickPrevious = () => { (pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : "") }

  const clickNext = () => { (pokemonIndex < pokemonList.length - 1 ? setPokemonIndex(pokemonIndex + 1) : "") }

  return (<div>

    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <button onClick={clickPrevious}>Previous</button>
    <button onClick={clickNext}>Next</button>

  </div>
  );

}
export default App;
