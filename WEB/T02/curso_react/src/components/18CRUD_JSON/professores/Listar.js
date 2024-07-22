import { Link, json } from "react-router-dom";
import "../css/crud.css";
import axios from "axios";

//import professores from "../data/data"
import { useEffect, useState } from "react";

const Listar = () => {

  const [professores, setProfessores] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    //listarProfessoresFetch();
    //listarProfessoresFetchAsync();
    //listProfessoresAxios();
    listProfessoresAxiosAsync();
  }, [reload]);

  const listarProfessoresFetch = () => {
    fetch("http://localhost:3001/professores")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProfessores(json);
      })
      .catch((error) => console.log(error));
  };

  const listarProfessoresFetchAsync = async () => {
    try {
      const response = await fetch("http://localhost:3001/professores");
      const json = await response.json();
      setProfessores(json);
    } catch (error) {
      console.log(error);
    }
  };

  const listProfessoresAxios = () => {
    axios.get("http://localhost:3001/professores")
    .then(
      (response) => {
        //console.log(json.data)
        setProfessores(response.data)
      }
    )
    .catch(error=>console.log(error))
  }

  const listProfessoresAxiosAsync = async () => {
    try{
      const response = await axios.get("http://localhost:3001/professores")
      setProfessores(response.data) 
    }catch(error){
      console.log(error)
    }
  }

  const deleteProfessor = (id) => {
    if(window.confirm("Deseja Exckuir " + id + "?")){
      axios.delete(`http://localhost:3001/professores/${id}`)
      .then(
        (response) => {
          setReload((ant)=>!ant)
        }
      )
      .catch(error => console.log(error) )
    }
  }

  const tabelaProfessores = () => {
    const professoresTabelados = professores.map((professor) => (
      <tr key={professor.id}>
        <th scope="row">{professor.id}</th>
        <td>{professor.nome}</td>
        <td>{professor.curso}</td>
        <td>{professor.titulacao}</td>
        <td>{JSON.stringify(professor.ai)}</td>
        <td>
          <div>
            <Link
              className="btn btn-primary button-space"
              to={`/professores/editar/${professor.id}`}
            >
              Editar
            </Link>
            <button className="btn btn-danger button-space" onClick={()=>deleteProfessor(professor.id)}>Apagar</button>
          </div>
        </td>
      </tr>
    ));

    return (
      <table className="table table-striped table-content">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Titulação</th>
            <th scopde="col">Áreas de Interesse</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>{professoresTabelados}</tbody>
      </table>
    );
  };

  return (
    <div className="page-content">
      <h2>Listar Professor</h2>
      {tabelaProfessores()}
    </div>
  );
};

export default Listar;
