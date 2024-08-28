//import ProfessorModel from "../models/ProfessorModel";
//import professores from "../data/db_professor";
const ProfessorModel = require("../models/ProfessorModel")
const professores = require("../data/db_professor")

let id = 5

class ProfessorService {
    
    static listar() {
        return professores
    }

    static criar(data) {
        let novoProfessor = new ProfessorModel(
            ++id,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai,
            data.universidade
        )
        professores.push(novoProfessor)
        return novoProfessor
    }
}

module.exports = ProfessorService