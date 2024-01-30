"use client"
import Image from "next/image"
import PokeButton from "./poke_button" 
import { nextPokemon, previousPokemon} from "./poke_server"

const PokeClient = ({ pokemon }) => {
    return (
        <div>
            <h1>Name:{pokemon.name}</h1>
            <Image
                src={pokemon.front}
                alt="Pokemon picture"
                width={300}
                height={300}
                priority
            />
            <Image
                src={pokemon.back}
                alt="Pokemon picture"
                width={300}
                height={300}
                priority
            />
            <form action={async () =>{await previousPokemon()}}>
                <PokeButton label="Previous"/>
            </form>
            <form action={async () =>{await nextPokemon()}}>
                <PokeButton label="Next"/>
            </form>
             
        </div>
    )
}

export default PokeClient