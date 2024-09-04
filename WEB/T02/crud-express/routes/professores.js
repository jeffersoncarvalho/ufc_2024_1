var express = require('express');
var router = express.Router();

const ProfessorService = require("../services/ProfessorService");
const ProfessorServiceMongo = require("../services/ProfessorServiceMongo")

/*router.get(
    "/listar",
    (request, response, next) => {
        response.json(ProfessorService.listar())
    }
)*/

router.get(
    "/listar",
    (request, response, next) => {
        ProfessorServiceMongo.listar(request,response)
    }
)

/*router.post(
    "/criar",
    (request, response, next) => {
        const novoProfessor = ProfessorService.criar(request.body)
        response.json(novoProfessor)
    }
)*/

//MONGO
router.post(
    "/criar",
    (request, response, next) => {
       ProfessorServiceMongo.criar(request,response)
    }
)

/*router.delete(
    "/apagar/:id",
    (request,response,next) => {
        const res = ProfessorService.apagar(request.params.id)
        response.json({"res":res})
    }
)*/

//MONGO
router.delete(
    "/apagar/:id",
    (request,response,next) => {
        ProfessorServiceMongo.apagar(request,response)
    }
)


module.exports = router