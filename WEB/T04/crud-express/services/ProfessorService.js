const ProfessorModel = require("../models/ProfessorModel")
const professores = require("../data/data")

//controle de ids
let id = 4 

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
            data.universidade
        )
        professores.push(novoProfessor)
        return novoProfessor
    }

}

module.exports = ProfessorService