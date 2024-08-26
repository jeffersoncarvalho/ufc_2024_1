const ProfessorModel = require("../models/ProfessorModel")
const professores = require("../data/data")

class ProfessorService {

    static listar() {
        return professores
    }

}

module.exports = ProfessorService