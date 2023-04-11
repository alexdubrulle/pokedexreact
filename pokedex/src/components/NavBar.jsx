//<button onClick={clickPrevious}>Previous</button>
//<button onClick={clickNext}>Next</button>
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
    const clickPrevious = () => { (pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : "") }

    const clickNext = () => { (pokemonIndex < pokemonList.length - 1 ? setPokemonIndex(pokemonIndex + 1) : "") }
    return (
        <div>
            <button onClick={clickPrevious}>Previous</button>
            <button onClick={clickNext}>Next</button>
        </div>)
}



export default NavBar;