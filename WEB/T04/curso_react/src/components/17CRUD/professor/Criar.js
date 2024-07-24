import "../css/crud.css"

import { useState } from "react"

const Criar = () => {
    
    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Nome: " + nome + "\n Curso: " + curso)
    }
    
    return (
        <div>
            <h1>Criar Professor</h1>
            <form className="form-content" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" 
                        id="inputNome"
                        onChange={(event)=>setNome(event.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso"
                        id="inputCurso"
                        onChange={(event)=>setCurso(event.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="selectTitulacao">Titulação</label> 
                    <select
                        className="form-select"
                        value={titulacao}
                        id="selectTitulacao"
                    >
                        <option value="GRADUACAO">GRADUAÇÃO</option>
                        <option value="MESTRADO">MESTRADO</option>
                        <option value="DOUTORADO">DOUTORADO</option>
                    </select>
                </div>
                
                <div className="div-button-submit">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>

            </form>
        </div>
        
    )
}

export default Criar