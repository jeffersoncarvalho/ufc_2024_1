var express = require('express');
var router = express.Router();

const ProfessorService = require("../services/ProfessorService");
const { request } = require('express');
const { response } = require('express');

router.get(
    "/listar",
    (request,response,next) => {
        response.json(ProfessorService.listar())
    }
)

router.get(
    "/recuperar/:id",
    (request, response, next) => {
        const id = request.params.id
        const professor = ProfessorService.recuperar(id)
        response.json(professor)
    }
)

router.post(
    "/criar",
    (request,response,next) => {
        const novoProfessor = ProfessorService.criar(request.body)
        response.json(novoProfessor)
    }
)

router.put(
    "/atualizar/:id",
    (request,response,next) => {
        const professorAtualizado = 
            ProfessorService.atualizar(
                request.params.id,
                request.body
            )
        response.json(professorAtualizado)
    }
)

router.delete(
    "/apagar/:id",
    (request,response,next) => {
        const res = ProfessorService.apagar(request.params.id)
        response.json({"res":res})
    }
)

module.exports = router;