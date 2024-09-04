var mongoose = require("mongoose")

var ProfessorSchema = mongoose.Schema (
    {
        nome: {type:String, required:true},
        curso: {type:String, required:true},
        titulacao: {type:String, required:true},
        ai: {type:Object, required:true},
        universidade: {type:Object, required:true}
    }
)

var ProfessorModel = mongoose.model("professores", ProfessorSchema)
module.exports = ProfessorModel