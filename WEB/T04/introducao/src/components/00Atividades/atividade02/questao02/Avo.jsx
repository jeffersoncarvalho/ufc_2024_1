import MyNumber from "./MeuContexto"
import Filho from "./Filho"

const Avo = () => {
    const numero = 10
    return (
        <>
        <h3>Avô: {numero}</h3>
        <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} 
            alt="pokemon"
            width={100}/>
        <MyNumber.Provider value={numero}>
            <Filho />
        </MyNumber.Provider>
        </>
    )
}

export default Avo