import { eventWrapper } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

const CriarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({es:false,lc:false,mc:false,al:false})
    const [universidade, setUniversidade] = useState("UFC")

    const handleRadio = (event) => {
        setUniversidade(event.target.value)
    }

    const handleCheckbox = (event) => {
        setAi(
            {
                ...ai,
                [event.target.name]:event.target.checked
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("\n" + nome +"\n" + curso + "\n" + titulacao )
    }

    return (
        <div>
            <h1>Criar Professor</h1>
            <h3>{universidade}</h3>
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

                <div>
                    <label className="form-label">Áreas de Interesse</label>
                    <div>
                        <input 
                            id="idES"
                            type="checkbox"
                            checked={ai.es}
                            name="es"
                            onChange={handleCheckbox}
                            className="form-check-input"
                        />
                        <label htmlFor="idES" className="form-check-label">Engenharia de Software</label>
                    </div>
                    <div>
                        <input 
                            id="idLC"
                            type="checkbox"
                            checked={ai.lc}
                            name="lc"
                            onChange={handleCheckbox}
                            className="form-check-input"
                        />
                        <label htmlFor="idLC" className="form-check-label">Lógica Computacional</label>
                    </div>
                    <div>
                        <input 
                            id="idMC"
                            type="checkbox"
                            checked={ai.mc}
                            name="mc"
                            onChange={handleCheckbox}
                            className="form-check-input"
                        />
                        <label htmlFor="idMC" className="form-check-label">Matemática Computacional</label>
                    </div>
                    <div>
                        <input 
                            id="idAL"
                            type="checkbox"
                            checked={ai.al}
                            name="al"
                            onChange={handleCheckbox}
                            className="form-check-input"
                        />
                        <label htmlFor="idAL" className="form-check-label">Algoritimos</label>
                    </div>
                </div>

                <div>
                    <div>
                        <input 
                            id="idUFC"
                            type="radio"
                            name="universidade"
                            value="UFC"
                            onChange={handleRadio}
                            className="form-check-input"
                        />
                        <label htmlFor="idUFC" className="form-check-label">UFC</label>
                    </div>
                    <div>
                        <input 
                            id="idIFCE"
                            type="radio"
                            name="universidade"
                            value="IFCE"
                            onChange={handleRadio}
                            className="form-check-input"
                        />
                        <label htmlFor="idIFCE" className="form-check-label">IFCE</label>
                    </div>
                </div>

                <div>
                    <button type="submit">
                        SUBMETER
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CriarProfessor