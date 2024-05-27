const Produto = ({nome,categoria,valor}) => {

    function retornaJson() {
        return {x:40,y:56}
    }

    return (
        <div>
            {/* <h1>{objJSON.notas.nota1}</h1> */}
            <h3>Nome: {nome}</h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: R$ {valor}</h3>
            <h3>{JSON.stringify(retornaJson())}</h3>
        </div>
    )
}

export default Produto