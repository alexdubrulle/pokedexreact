//<button onClick={clickPrevious}>Previous</button>
//<button onClick={clickNext}>Next</button>
function NavBar({ onSelect, pokemonList }) {
    return (
        <div>
            {
                pokemonList.map((pokemon, index) => {
                    return <button key={index} onClick={() => onSelect(index)}>{pokemon.name}</button>
                })
            }
        </div>
    )
}



export default NavBar;