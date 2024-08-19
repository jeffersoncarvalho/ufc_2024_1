import ProfessorService from "../../services/ProfessorService";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarProfessor = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [titulacao, setTitulacao] = useState("GRAD");
  const [ai, setAi] = useState({ es: false, lc: false, mc: false, al: false });
  const [universidade, setUniversidade] = useState({ ifce: false, ufc: false });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    ProfessorService.getProfessorById(
        id, 
        (response) => {
            const { nome, curso, titulacao, ai, universidade } = response
            setNome(nome);
            setCurso(curso);
            setTitulacao(titulacao);
            setAi(ai);
            setUniversidade(universidade);
        }
    );
    
  }, [id]);

  const handleRadio = (event) => {
    const reset = { ifce: false, ufc: false };
    setUniversidade({
      ...reset,
      [event.target.value]: event.target.checked,
    });
  };

  const handleCheckbox = (event) => {
    setAi({
      ...ai,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const professorEditado = { nome, curso, titulacao, ai, universidade };
    ProfessorService.atualizarProfessorById(
        id,
        professorEditado,
        (response) => {
            navigate("/professores/listar")
        }
    )
  };

  return (
    <div className="page-content">
      <h1>Editar Professor</h1>
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
            <option value="DOUT">DOUTORADO</option>
          </select>
        </div>

        <div style={{ marginTop: "10px" }}>
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
              <label htmlFor="idES" className="form-check-label">
                Engenharia de Software
              </label>
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
              <label htmlFor="idLC" className="form-check-label">
                Lógica Computacional
              </label>
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
              <label htmlFor="idMC" className="form-check-label">
                Matemática Computacional
              </label>
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
              <label htmlFor="idAL" className="form-check-label">
                Algoritimos
              </label>
            </div>
          </fieldset>
        </div>

        <div style={{ marginTop: "10px" }}>
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
              <label htmlFor="idUFC" className="form-check-label">
                UFC
              </label>
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
              <label htmlFor="idIFCE" className="form-check-label">
                IFCE
              </label>
            </div>
          </fieldset>
        </div>

        <div className="div-button-submit">
          <button type="submit" className="btn btn-primary">
            ATUALIZAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarProfessor;
