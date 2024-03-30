const PlacaMae = ({nome, preco}) => {
    return (
        <>
            <h3>Placa Mãe : {nome}, {preco}</h3>
        </>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <>
            <h3>Memória : {nome}, {preco}</h3>
        </>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <>
            <h3>Placa de Vídeo : {nome}, {preco}</h3>
        </>
    )
}

export { PlacaMae, Memoria, PlacaDeVideo}