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

    static recuperar(id) {
        for(let i=0; i<professores.length; i++) {
            if(professores[i].id == id) return professores[i]
        }
        return null
    }

    static atualizar(id, professor) {
        for(let i=0; i<professores.length; i++) {
            if(professores[i].id == id){
                professores[i].nome = professor.nome
                professores[i].curso = professor.curso
                professores[i].titulacao = professor.titulacao
                professores[i].universidade = professor.universidade
                professores[i].ai = professor.ai
                return professores[i]
             }
        }
    }

    static apagar(id) {
        for(let i=0; i<professores.length; i++) {
            if(professores[i].id == id){
                professores.splice(i,1)
                return true
            }
        }
        return false
    }

}

module.exports = ProfessorService