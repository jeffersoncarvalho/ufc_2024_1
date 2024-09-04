import axios from "axios";

const url = "http://localhost:3001/professores/";

class ProfessorService {
  static getProfessoresFetchAsyncAwait = async (callback) => {
    try {
      const response = await fetch(url+"listar");
      const json = await response.json();
      callback(json);
    } catch (error) {
      console.log(error);
    }
  };

  static getProfessoresFetchThenCatch = (callback) => {
    fetch(url+"listar")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        //console.log(json)
        callback(json);
      })
      .catch((error) => console.log(error));
  };

  static getProfessoresAxiosAsyncAwait = async (callback) => {
    try {
      const response = await axios.get(url+"listar");
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static getProfessoresAxiosThenCatch = (callback) => {
    axios
      .get(url+"listar")
      .then((response) => {
        //console.log(response.data)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static getProfessorById = (id, callback) => {
    axios
      .get(`http://localhost:3001/professores/${id}`)
      .then((response) => {
        //console.log(response.data)
        //const { nome, curso, titulacao, ai, universidade } = response.data;
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static atualizarProfessorById = (id, professorEditado, callback) => {
    axios
      .put(`http://localhost:3001/professores/${id}`, professorEditado)
      .then((response) => {
        //console.log(response)
        //navigate("/professores/listar");
        callback(response);
      })
      .catch((error) => console.log(error));
  };

  static deleteProfessorById = (id, callback) => {
    axios
      .delete(`http://localhost:3001/professores/apagar/${id}`)
      .then((response) => {
        //console.log(response);
        callback(response)
      })
      .catch((error) => console.log(error));
  };
}

export default ProfessorService;
