/*const Planeta = (props) => {
    
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Tipo: {props.tipo}</h3>
            <h3>Posiçao: {props.pos}</h3>
        </div>
    )
}*/

/*const Planeta = (props) => {
    
    const {nome, tipo, pos} = props

    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Tipo: {tipo}</h3>
            <h3>Posiçao: {pos}</h3>
        </div>
    )
}*/

const Planeta = ({nome, tipo, pos, imagem, galaxia}) => {
    
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Tipo: {tipo}</h3>
            <h3>Posiçao: {pos}</h3>
            <h3>Galáxia: {galaxia}</h3>
            <img src={imagem} alt="Planeta" width={150}/>
        </div>
    )
}

export default Planeta