import PokemonClient from "./pokemon_client"

const getJson = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
        const json = await response.json()
        return json
    }catch(error){
        throw new Error("FAILED: " + error)
    }
    
}

const Layout = async () => {
    const json = await getJson()
    return (
        <>
            <PokemonClient data={json} />
        </>
    )
}

export default Layout