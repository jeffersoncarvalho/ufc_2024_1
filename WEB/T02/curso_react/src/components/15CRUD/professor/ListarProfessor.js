//import professores from "../data/db_professor";
import { useState, useEffect } from "react";
import "../css/crud.css";
import axios from "axios";

const ListarProfessor = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    //getProfessoresAxiosThenCatch();
    //getProfessoresAxiosAsyncAwait();
    //getProfessoresFetchThenCatch();
    getProfessoresFetchAsyncAwait();
  }, []);

  const getProfessoresFetchAsyncAwait = async () => {
    try {
      const response = await fetch("http://localhost:3001/professores");
      const json = await response.json();
      setProfessores(json);
    } catch (error) {
      console.log(error);
    }
  };

  const getProfessoresFetchThenCatch = () => {
    fetch("http://localhost:3001/professores")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        //console.log(json)
        setProfessores(json);
      })
      .catch((error) => console.log(error));
  };

  const getProfessoresAxiosAsyncAwait = async () => {
    try {
      const response = await axios.get("http://localhost:3001/professores");
      setProfessores(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProfessoresAxiosThenCatch = () => {
    axios
      .get("http://localhost:3001/professores")
      .then((response) => {
        //console.log(response.data)
        setProfessores(response.data);
      })
      .catch((error) => console.log(error));
  };

  const corpoTabela = () => {
    const novoArray = professores.map(
      (professor) => {
        return (
          <tr>
            <th scope="row">{professor.id}</th>
            <td>{professor.nome}</td>
            <td>{professor.curso}</td>
            <td>{professor.titulacao}</td>
          </tr>
        ); //return de cada elemento como um JSX
      } //funcao arrow
    ); //map
    return novoArray;
  };

  return (
    <div className="page-content">
      <h1>Listar Professores</h1>
      <table className="table table-striped table-content">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Titulação</th>
          </tr>
        </thead>
        <tbody>{corpoTabela()}</tbody>
      </table>
    </div>
  );
};

export default ListarProfessor;
