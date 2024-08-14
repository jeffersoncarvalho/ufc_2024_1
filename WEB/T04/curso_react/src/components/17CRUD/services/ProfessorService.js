import axios from "axios";

const url = "http://localhost:3001/professores";

class ProfessorService {
  //GET SERVICES
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

  //POST SERVICES
  static postProfessorAxiosThenCatch = (professor, callback) => {
    axios
      .post(url, professor)
      .then((response) => {
        callback(response);
      })
      .catch((error) => console.log(error));
  };

  static postProfessorFetchThenCatch = (professor, callback) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(professor),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => callback(json))
      .catch((error) => console.log(error));
  };
}

export default ProfessorService;
