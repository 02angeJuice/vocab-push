import React from 'react'

const RandomPokemon = () => {
  const pokeNum = Math.floor(Math.random() * 151) + 1
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`

  return (
    <div className="border border-sky-500 w-2/12 mx-auto">
      <h1 className="text-3xl text-cyan-400 text">Pokedex {pokeNum}</h1>
      <img src={url} width="150px" alt="" />
    </div>
  )
}

export default RandomPokemon
