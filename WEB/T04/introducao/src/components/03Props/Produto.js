const Produto = ({nome, categoria, valor}) => {

    //let objJSON = {nome:"Jefferson", idade: 18, curso: "Engenharia de Alimentos", notas: {nota1:5,nota2:3}}
    //const {nome, categoria, valor} = props

    return (
        <div>
            {/* <h1>{objJSON.notas.nota1}</h1> */}
            <h3>Nome: {nome}</h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: R$ {valor}</h3>
        </div>
    )
}

export default Produto