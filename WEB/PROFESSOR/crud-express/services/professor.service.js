const ProfessorModel = require("../models/professor.model")
const professores = require("../data/data")

let id = 6

class ProfessorService {
    static list(){
        return professores
    }

    static register(data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai,
            data.universidade
        )
        professores.push(professor)
        return professor
    }

    static retrieve(id){
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id) return professores[i]
        return null
    }

    static update(id,data){
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                professores[i].nome = data.nome
                professores[i].curso = data.curso
                professores[i].titulacao = data.titulacao
                professores[i].ai = data.ai
                professores[i].universidade = data.universidade
                return professores[i]
            }
        return null
    }

    static delete(id) {
        for(let i=0;i<professores.length;i++)
            if(professores[i].id == id){
                professores.splice(i,1) 
                return true
            }
        return false
    }
}

module.exports = ProfessorService