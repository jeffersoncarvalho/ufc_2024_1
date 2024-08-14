import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const EditarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")

    const {id} = useParams()

    useEffect(
        () => {
            axios.get(`http://localhost:3001/professores/${id}`)
            .then((response) => {
                //console.log(response.data)
                const {nome,curso,titulacao} = response.data
                setNome(nome)
                setCurso(curso)
                setTitulacao(titulacao)
            })
            .catch(error=>console.log(error))
        },
        []
    ) 

    const handleSubmit = (event) => {

    }

    return (
        <div className="page-content">
            <h1>Criar Professor</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="idNome" className="form-label">
                        Nome
                    </label>
                    
                    <input 
                        id="idNome"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        className="form-control"
                    />
                </div>

                <div>
                    <label htmlFor="idCurso" className="form-label">
                        Curso
                    </label>
                    
                    <input 
                        id="idCurso"
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                        className="form-control"
                    />
                </div>

                <div>
                    <label htmlFor="idTitulacao" className="form-label">
                        Titulação
                    </label>
                    
                    <select
                        id="idTitulacao"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                        className="form-select"
                    >
                        <option value="GRAD">GRADUAÇÃO</option>
                        <option value="MEST">MESTRADO</option>
                        <option value="DOUT" >DOUTORADO</option>
                    </select>
                </div>
            </form>
        </div>

    )
}

export default EditarProfessor