var ProfessorModel = require("../models/ProfessorModelMongo")

class ProfessorServiceMongo {

    static listar (request, response) {
        ProfessorModel.find()
        .then(
            (professores) => {
                response.json(professores)
            }
        )
        .catch(error => console.log(error))
    }

    static criar (request, response) {
        ProfessorModel.create(request.body)
        .then(
            (professor) => {
                response.json(professor)
            }
        )
        .catch(error => console.log(error))
    }

    static apagar (request,response) {
        ProfessorModel.findByIdAndDelete(request.params.id)
        .then(
            (professor) => {
                response.json(professor)
            }
        )
        .catch(error => console.log(error))
    }

}

module.exports = ProfessorServiceMongo