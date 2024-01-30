import Link from "next/link"
import { getPokemon } from "./poke_server"
import PokeClient from "./poke_client"

const PokePage = async () => {
    const pokemon = await getPokemon()
    console.log(pokemon)
    return (
        <>
            <PokeClient pokemon={pokemon}/>
            <Link href="/">Home</Link>s
        </>
    )   
}

export default PokePage