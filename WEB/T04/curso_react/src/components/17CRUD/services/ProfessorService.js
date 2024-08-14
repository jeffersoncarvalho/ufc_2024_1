import axios from "axios";

const url = "http://localhost:3001/professores";

class ProfessorService {
  static getProfessoresAxiosThenCatch = (callback) => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data)
        callback(response.data);
      })
      .catch((error) => console.log(error));
  };

  static getProfessoresAxiosAsyncAwait = async (callback) => {
    try {
      const response = await axios.get(url);
      callback(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static getProfessoresFetchThenCatch = (callback) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };

  static getProfessoresFetchAsyncAwait = async (callback) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      callback(json);
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProfessorService;
