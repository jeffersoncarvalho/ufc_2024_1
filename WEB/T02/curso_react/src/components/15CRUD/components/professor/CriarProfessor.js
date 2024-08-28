import "../../css/crud.css"
import { useState } from "react"

import axios from "axios"

const CriarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({es:false,lc:false,mc:false,al:false})
    const [universidade, setUniversidade] = useState({ifce:false,ufc:false})

    const handleRadio = (event) => {
        const reset = {ifce:false,ufc:false}
        setUniversidade({
            ...reset,
            [event.target.value]:event.target.checked
        })
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
        const novoProfessor = {nome,curso,titulacao,ai,universidade}
        postProfessorAxiosThenCatch(novoProfessor)
    }

    const postProfessorAxiosThenCatch = (novoProfessor) => {
        axios.post("http://localhost:3001/professores/criar", novoProfessor)
        .then((response) => {
            console.log(response)
        })
        .catch(error => console.log(error))
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

                <div style={{ marginTop: "10px"}}>
                    <label className="form-label">Áreas de Interesse</label>
                    <fieldset className="scheduler-border">
                    <div className="form-check">
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
                    <div className="form-check">
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
                    <div className="form-check">
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
                    <div className="form-check">
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
                    </fieldset>
                </div>

                <div style={{marginTop:"10px"}}>
                    <label className="form-label">Universidade</label>
                    <fieldset className="scheduler-border">
                    <div className="form-check">
                        <input 
                            id="idUFC"
                            type="radio"
                            name="universidade"
                            value="ufc"
                            checked={universidade.ufc}
                            onChange={handleRadio}
                            className="form-check-input"
                        />
                        <label htmlFor="idUFC" className="form-check-label">UFC</label>
                    </div>
                    <div className="form-check">
                        <input 
                            id="idIFCE"
                            type="radio"
                            name="universidade"
                            value="ifce"
                            checked={universidade.ifce}
                            onChange={handleRadio}
                            className="form-check-input"
                        />
                        <label htmlFor="idIFCE" className="form-check-label">IFCE</label>
                    </div>
                    </fieldset>
                </div>

                <div className="div-button-submit">
                    <button type="submit" className="btn btn-primary">
                        SUBMETER
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CriarProfessor