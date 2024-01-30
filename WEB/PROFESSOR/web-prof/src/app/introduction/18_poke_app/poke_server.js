"use server"
import { revalidatePath } from "next/cache"
let pokemonId = 10

const getPokemon = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        const json = await response.json()
        let pokemon = {id:json.id,name:json.name,front:json.sprites.front_default,back:json.sprites.back_default}
        //console.log(pokemon)
        return pokemon
    }catch(error){
        throw new Error("FAILED: " + error)
    }
}

const nextPokemon = async () => {
    pokemonId = pokemonId + 1
    console.log(pokemonId)
    revalidatePath("/introduction/18_poke_app")

}

const previousPokemon = async () => {
    pokemonId = pokemonId - 1
    revalidatePath("/introduction/18_poke_app")
}

export { getPokemon, nextPokemon, previousPokemon }