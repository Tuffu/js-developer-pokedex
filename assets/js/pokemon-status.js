const pokemonStatusLi = document.getElementById('pokemonStatusLi')

function convertPokekonStatusToLi(pokemon) {
    return `
    <li class="pokemonList ${pokemon.type}">
        <div class="pokemon.type">
            <ol class=" pokemonTypeOl">
                <h1>${pokemon.name}</h1>
                <span><b>#${pokemon.number}</b></span>
                <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
                </ol>
                
            </ol>
        </div>

        <div class="detalhes">
            <img src="${pokemon.photo}"alt="">
        </div>
    </li>

    <div class="poke-element">
        <ol class="pokemon-nav">
            <li class="pokemon-nav-li">About</li>
            <li class="pokemon-nav-li">Base Status</li>
            <li class="pokemon-nav-li">Evolution</li>
            <li class="pokemon-nav-li">Moves</li>
        </ol>

        <div class="pokemon-info">
            <ol class="pokemon-info-list">
                <li class="pokemon-list">Abilities: <span>${pokemon.abilities}</span></li></li>
                <li class="pokemon-list">Height: <span>${pokemon.height}</span></li>
                <li class="pokemon-list">Weight: <span>${pokemon.weight}</span></li></li>
                <li class="pokemon-list">Abilities: <span>${pokemon.baseStats}</span></li></li>
            </ol>
        <\div>
    </div>
    `
}

function loadPokemonStatusItens(offset, limit) {
    pokeApi.getPokemons(4, 1).then((pokemons = []) => {   
            const newHtml = pokemons.map(convertPokekonStatusToLi).join('')
            pokemonStatusLi.innerHTML += newHtml
    });
}

loadPokemonStatusItens(offset, limit)