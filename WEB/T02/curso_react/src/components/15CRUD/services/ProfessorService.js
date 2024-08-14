import axios from "axios";

const url = "http://localhost:3001/professores"

class ProfessorService {

    static getProfessoresFetchAsyncAwait = async (callback) => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          callback(json);
        } catch (error) {
          console.log(error);
        }
    };

    static getProfessoresFetchThenCatch = (callback) => {
        fetch(url)
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
          const response = await axios.get(url);
          callback(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      static getProfessoresAxiosThenCatch = (callback) => {
        axios
          .get(url)
          .then((response) => {
            //console.log(response.data)
            callback(response.data);
          })
          .catch((error) => console.log(error));
      };

}

export default ProfessorService