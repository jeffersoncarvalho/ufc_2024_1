import Link from "next/link"
import Layout from "./pokemon_server"

const PokemonPage = () => {
    return (
        <>
            <Layout />
            <Link href="/">Home</Link>
        </>
    )
}

export default PokemonPage