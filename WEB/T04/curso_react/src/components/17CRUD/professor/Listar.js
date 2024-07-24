import professores from "../data/db_professor"

const Listar = () => {

    const renderizarProfessores = () => {
        const vetorResultado = professores.map(professor => JSON.stringify(professor)) 
        return vetorResultado
    }

    return (
        <>
            <h1>Listar Professor</h1>
            <div>
                {renderizarProfessores()}
            </div>
        </>
    )
}

export default Listar