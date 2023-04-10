import React from "react";


function PokemonCard(props) {
    console.log(props)
    return (
        <div>
            <figure>
                {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> : <p>???</p>}
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        </div>
    );
}

export default PokemonCard;