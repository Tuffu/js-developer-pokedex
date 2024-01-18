const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonStatusLi = document.getElementById('pokemonStatusLi')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
                </ol>

                <a href="pokeStatus.html" target="_self"><img src="${pokemon.photo}" alt="${pokemon.name}"></a>
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

function convertPokekonStatusToLi(pokemon) {
    return `
    <li class="pokemonList">
        <div class="pokemon.type">
            <ol class=" pokemonTypeOl">
                <h1>${pokemon.name}</h1>
                <span><b>#${pokemon.number}</b></span>
                ${pokemon.types.map((type) => `<li class="pokemonTypeLi">${type}</li>`).join('')}
                
            </ol>
        </div>

        <div class="detalhes">
            <img src="${pokemon.photo}"
alt="">
        </div>
    </li>
    <ol class="pokemon-nav">
                <li class="pokemon-nav-li">About </li>
                <li class="pokemon-nav-li">Base Status </li>
                <li class="pokemon-nav-li">Evolution </li>
                <li class="pokemon-nav-li">Moves </li>
            </ol>

            <div class="pokemon-info">
                <ol class="pokemon-info-list">
                    <li class="pokemon-list">Abilities: <span>${pokemon.abilities}</span></li></li>
                    <li class="pokemon-list">Height: <span>${pokemon.height}</span></li>
                    <li class="pokemon-list">Weight: <span>${pokemon.weight}</span></li></li>
                    <li class="pokemon-list">Abilities: <span>${pokemon.baseStats}</span></li></li>
                </ol>
            </div>
    `
}

function loadPokemonStatusItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokekonStatusToLi).join('')
        pokemonStatusLi.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)
loadPokemonStatusItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})