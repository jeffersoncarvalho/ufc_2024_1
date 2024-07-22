import { useNavigate, useParams } from "react-router-dom";
//import professores from "../data/data";
import { useEffect, useState } from "react";
import axios from "axios";

const Editar = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ai, setAi] = useState({ es: false, lc: false, md: false, al: false });
  const [titulacao, setTitulacao] = useState("");
  const [universidade, setUniversidade] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/professores/?id=${id}`)
      .then((response) => {
        const professor = response.data[0];
        setNome(professor.nome);
        setCurso(professor.curso);
        setAi(professor.ai);
        setTitulacao(professor.titulacao);
        setUniversidade(professor.universidade);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleCheckbox = (event) => {
    setAi({
      ...ai,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSelect = (event) => {
    setTitulacao(event.target.value);
  };

  const handleRadio = (event) => {
    //console.log(event.target.value)
    setUniversidade(event.target.value);
  };

  const atualizarProfessorFetchAsync = async (editedProfessor) => {
    try {
      const response = await fetch(`http://localhost:3001/professores/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProfessor),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedProfessor = { nome, curso, titulacao, ai, universidade };
    atualizarProfessorFetchAsync(editedProfessor);
    navigate("/professores/listar");
   
    /*console.log(
      "Nome " +
        nome +
        "\n" +
        "Curso " +
        curso +
        "\n" +
        "Titulação " +
        titulacao +
        "\n" +
        "AI " +
        JSON.stringify(ai) +
        "\n" +
        universidade
    );*/
  };

  return (
    <div className="page-content">
      <h2>Editar Professor</h2>

      <form className="form-content" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Curso
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="curso"
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
          />
        </div>

        <label className="form-label">Áreas de Interesse</label>
        <div className="border rounded mb-3" style={{ padding: "10px" }}>
          <div className="mb-3 form-check">
            {/**Engenharia de Software */}
            <input
              type="checkbox"
              className="form-check-input"
              id="es"
              name="es"
              checked={ai.es}
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="es">
              Engenharia de Software
            </label>
          </div>
          <div className="mb-3 form-check">
            {/**Lógica Computacional */}
            <input
              type="checkbox"
              className="form-check-input"
              id="lc"
              name="lc"
              checked={ai.lc}
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="lc">
              Lógica Computacional
            </label>
          </div>
          <div className="mb-3 form-check">
            {/**Matemática Discreta */}
            <input
              type="checkbox"
              className="form-check-input"
              id="md"
              name="md"
              checked={ai.md}
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="md">
              Matemática Discreta
            </label>
          </div>
          <div className="mb-3 form-check">
            {/**Algoritimos */}
            <input
              type="checkbox"
              className="form-check-input"
              id="al"
              name="al"
              checked={ai.al}
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="al">
              Algoritimos
            </label>
          </div>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={titulacao}
            onChange={handleSelect}
          >
            <option value="GRAD">Graduação</option>
            <option value="MEST">Mestrado</option>
            <option value="DOUT">Doutorado</option>
          </select>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="universidade"
              id="ufc"
              value="ufc"
              checked={universidade === "ufc" ? true : false}
              onChange={handleRadio}
            />
            <label className="form-check-label" htmlFor="ufc">
              UFC
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="universidade"
              id="ifce"
              value="ifce"
              checked={universidade === "ifce" ? true : false}
              onChange={handleRadio}
            />
            <label className="form-check-label" htmlFor="ifce">
              IFCE
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Editar;
