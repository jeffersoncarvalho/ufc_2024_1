var ProfessorModelMongo = require("../models/ProfessorModelMongo")

class ProfessorServiceMongo {

    static recuperar(request, response) {
        ProfessorModelMongo.findById(request.params.id)
        .then( 
            (professor) => {
                response.json(professor)
            }
        )
        .catch(error => console.log(error))
    }

    static listar(request, response) {
        ProfessorModelMongo.find()
        .then(
            (professores) => {
                response.json(professores)       
            }
        )
        .catch( error => console.log(error))
    }

    static criar(request, response) {
        ProfessorModelMongo.create(request.body)
        .then(
            (professor) => {
                response.json(professor)
            }
        )
        .catch(error => console.log(error))
    } 

    static atualizar(request, response) {
        ProfessorModelMongo.findByIdAndUpdate(
            request.params.id,
            request.body
        )
        .then(
            (professor) => {
                response.json(professor)
            }
        )
        .catch(error => console.log(error))
    }

    static delete(request, response) {
        ProfessorModelMongo.findByIdAndDelete(request.params.id)
        .then(
            (professor) => {
                response.json(professor)
            }
        )
        .catch(error => console.log(error))
    }
}

module.exports = ProfessorServiceMongo